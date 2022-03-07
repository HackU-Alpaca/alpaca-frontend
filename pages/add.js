import PostList from "../components/index/PostList"
import useSWR from "swr";

const postFetcher = url => fetch(url).then(res => res.json())

const Add = () => {
  const {data: posts, posts_error} = useSWR("/api/posts", postFetcher)
  if (posts_error) return <>Failed to load</>
  if (!posts) return <>Loading...</>

  return (
    <div>
      <PostList posts={posts} display={"all"}/>
    </div>
  );
}

export default Add;