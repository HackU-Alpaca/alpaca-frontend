const sorter = (posts, by_item, order="ascending") => {
  posts.sort( (a, b) => {
    switch (order) {
      case "ascending":
        return (a[by_item] < b[by_item]) ? 1 : -1;
      case "descending":
        return (a[by_item] > b[by_item]) ? 1 : -1;
      default:
        break;
    }
  })
  return posts;
}

export { sorter };