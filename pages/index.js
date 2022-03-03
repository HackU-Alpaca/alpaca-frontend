import styles from '../styles/Index.module.css'
import useSWR from "swr";

import { url, imageFetcher } from '../pixabay';
import PostList from '../components/index/PostList';

const Index = () => {
  const { data, error } = useSWR(url, imageFetcher)

  if (error) return <>Failed to load</>

  if (!data) return <>Loading...</>

  return (
    <div className={styles.index_container}>
      <PostList
        posts={data}
      />
    </div>
  );
}

export default Index;