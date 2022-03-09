const sorter = (posts, order_by, ascending=true) => {
  posts.sort( (a, b) => {
    switch (ascending) {
      case true:
        return (a[order_by] > b[order_by]) ? 1 : -1;
      case false:
        return (a[order_by] < b[order_by]) ? 1 : -1;
      default:
        break;
    }
  })
  return posts;
}

export { sorter };