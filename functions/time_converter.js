const convert_time = posts => {
  posts.map(post => {
    if (typeof(post.createdAt) === "string") {
      const iso_format = post.createdAt.split('.')[0];
      post.createdAt = new Date(iso_format);
    }
  })
  return posts;
}

export { convert_time };