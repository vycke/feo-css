import { promises as fs } from 'fs';
import fm from 'front-matter';
import { resolve } from 'path';
import renderer from '$lib/renderer';

function getHeaders(html) {
	const headers = [];
	const elements = html.match(new RegExp('<h2(.*?)</h2>', 'g')) || [];

	elements.forEach((e) => {
		const tokens = e.replace('</h2>', '').replace('<h2', '').replace('id="', '').split('">');
		headers.push({ id: tokens[0].trim(), label: tokens[1].trim() });
	});

	return headers;
}

export async function getDoc(slug) {
	const _path = resolve('content', slug);
	const src = await fs.readFile(_path, 'utf8');
	const stats = await fs.stat(_path);
	const { body, ...matter } = fm(src);
	const html = renderer(body);
	const headers = getHeaders(html);

	return {
		slug: slug.replace('.md', ''),
		html,
		headers,
		modifiedAt: stats.mtime,
		...matter.attributes
	};
}

export async function getDocs() {
	const _path = resolve('content');
	const files = (await fs.readdir(_path)) || [];
	const docs = [];

	for (let i = 0; i < files.length; i++) {
		const { slug, category, title, headers, order } = await getDoc(files[i]);
		docs.push({ slug, title, category, headers, order });
	}

	return docs;
}
