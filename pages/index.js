import styles from '../styles/Index.module.css'
import useSWR from "swr";

import { url, imageFetcher } from '../pixabay';
import CommentList from '../components/index/CommentList';

const Index = () => {
  const { data, error } = useSWR(url, imageFetcher)

  if (error) return <>Failed to load</>

  if (!data) return <>Loading...</>

  return (
    <div className={styles.index_container}>
      <CommentList
        posts={data}
      />
    </div>
  );
}

export default Index;