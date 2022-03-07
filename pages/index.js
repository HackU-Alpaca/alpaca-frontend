import styles from '../styles/index/Index.module.css'
import useSWR from "swr";

import { fetcher } from '../pixabay';
import PostList from '../components/index/PostList';
import DigestList from '../components/index/DigestList';

const postFetcher = url => fetch(url).then(res => res.json())

const Index = () => {
  const {data: posts, error} = useSWR("/api/posts", postFetcher)

  if (error) return <>Failed to load</>
  if (!posts) return <>Loading...</>

  return (
    <div className={styles.index_container}>
      <DigestList posts={posts} />
      <PostList posts={posts} display={6}/>
    </div>
  );
}

Index.layout = "index";

export default Index;