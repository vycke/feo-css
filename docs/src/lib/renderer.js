import marked from 'marked';
import prism from 'prismjs';
// import 'prism-svelte';
import 'prismjs/components/prism-scss.js';
import 'prismjs/components/prism-jsx.js';
import 'prismjs/components/prism-bash.js';

// Hack to ensure images are not wrapped in a paragraph tag
marked.Renderer.prototype.paragraph = function (text) {
	if (text.startsWith('<img')) return text;
	return '<p>' + text + '</p>';
};

// lazy loading images
marked.Renderer.prototype.image = function (href, title, text) {
	return `<img src="${href}" loading=lazy alt="${text}">`;
};

// Hack to add lang as additional attribute so it can be displayed
marked.Renderer.prototype.code = function (code, lang) {
	try {
		const formatted = prism.highlight(code, prism.languages[lang], lang);
		return `<pre data-lang="${lang}"><span>${lang}</span><code class="language-${lang}">${formatted}</code></pre>`;
	} catch (e) {
		return `<pre><code class="language-${lang}">${code}</code></pre>`;
	}
};

const infoblock = {
	name: 'infoBlock',
	level: 'block',
	start(src) {
		return src.match(/^ {0,3}:{3,}\n/)?.index;
	}, // Hint to Marked.js to stop and check for a match
	tokenizer(src) {
		const rule = /^ {0,3}(:{3,}(?=[^:\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~:]* *(?:\n+|$)|$)/; // Regex for the complete token
		const match = rule.exec(src);

		if (match) {
			return {
				type: 'infoBlock',
				raw: match[0],
				tokens: this.inlineTokens(
					match[0]
						.replace(/:{3,}\n/, '')
						.replace(/\n:{3,}/, '')
						.trim()
				)
			};
		}
	},
	renderer(token) {
		return `<aside>${this.parseInline(token.tokens)}\n</aside>`;
	}
};

marked.use({ extensions: [infoblock] });

export default marked;
