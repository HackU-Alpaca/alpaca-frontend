import styles from '../styles/index/Index.module.css'
import useSWR from "swr";

import { fetcher } from '../pixabay';
import PostList from '../components/index/PostList';
import StoryList from '../components/index/StoryList';
const postFetcher = url => fetch(url).then(res => res.json())

const Index = () => {
  // const { data: image_posts, error: image_error } = useSWR("images", fetcher)

  const {data: posts, posts_error} = useSWR("/api/posts", postFetcher)
  const { data: video_posts, error: video_error} = useSWR("videos", fetcher)

  if (posts_error | video_error) return <>Failed to load</>
  if (!posts | !video_posts) return <>Loading...</>

  return (
    <div className={styles.index_container}>
      <StoryList posts={video_posts} />
      <PostList posts={posts} />
    </div>
  );
}

export default Index;