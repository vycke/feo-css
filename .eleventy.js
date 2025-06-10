import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import * as filters from "./site/_config/filters.js";
import * as shortcodes from "./site/_config/shortcodes.js";

export default async function (config) {
  config.addPassthroughCopy({ "./public/": "/" });
  config.addPlugin(syntaxHighlight);

  // filters
  Object.keys(filters).forEach((name) => {
    config.addFilter(name, filters[name]);
  });
  // shortcodes
  Object.keys(shortcodes).forEach((name) => {
    config.addShortcode(name, shortcodes[name]);
  });

  return {
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "site",
      output: "_site",
    },
  };
}
