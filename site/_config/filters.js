function sort(key) {
  return function (a, b) {
    return a.data[key] < b.data[key] ? -1 : 1;
  };
}

export function navigation(collection) {
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

export function subitems(collection, key) {
  return collection
    .filter((c) => c.data.parent === key && c.data.key)
    .sort(sort("title"));
}

export function selected(item, itemKey, key) {
  return itemKey === key || item.sub.some((i) => i.key === key);
}
