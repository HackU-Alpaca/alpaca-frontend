const sort_by_time = (posts, flag="latest") => {
  posts.sort( (a, b) => {
    switch (flag) {
      case "latest":
        return (a.createdAt < b.createdAt) ? 1 : -1;
      case "oldest":
        return (a.createdAt > b.createdAt) ? 1 : -1;
      default:
        break;
    }
  })
  return posts;
}

export { sort_by_time };