import styles from '../styles/index/Index.module.css'
import useSWR from "swr";

import { fetcher } from '../pixabay';
import PostList from '../components/index/PostList';
import StoryList from '../components/index/StoryList';

const Index = () => {
  const { data: image_posts, error: image_error } = useSWR("images", fetcher)
  const { data: video_posts, error: video_error} = useSWR("videos", fetcher)

  if (image_error | video_error) return <>Failed to load</>
  if (!image_posts | !video_posts) return <>Loading...</>

  return (
    <div className={styles.index_container}>
      <StoryList posts={video_posts} />
      <PostList posts={image_posts} />
    </div>
  );
}

export default Index;