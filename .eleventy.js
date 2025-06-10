function sort(key) {
  return function (a, b) {
    return a.data[key] < b.data[key] ? -1 : 1;
  };
}

function getNavigation(collection) {
  const items = {};

  // main navigation items
  let _c = collection.filter((c) => !c.data.parent);
  for (let i in _c) {
    const item = _c[i].data;
    items[item.key] = {
      title: item.title,
      order: item.order,
      url: item.page.url,
      sub: [],
    };
  }

  // sub items
  _c = collection.filter((c) => c.data.parent).sort(sort("title"));
  for (let i in _c) {
    const item = _c[i].data;
    items[item.parent].sub.push({
      title: item.title,
      url: item.page.url,
      key: item.key,
    });
  }
  return Object.entries(items).sort((a, b) =>
    Math.sign(a[1].order - b[1].order),
  );
}

function getSubitems(collection, key) {
  return collection
    .filter((c) => c.data.key === key && c.data.key)
    .sort(sort("title"));
}

module.exports = (config) => {
  config.addPassthroughCopy({ "./public/": "/" });
  config.addFilter("navigation", getNavigation);
  config.addFilter("subitems", getSubitems);

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
