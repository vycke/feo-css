module.exports = (config) => {
  config.addPassthroughCopy({ "./public/": "/" });

  return {
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "site",
      output: "_site",
    },
  };
};
