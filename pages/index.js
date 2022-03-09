import styles from '../styles/index/Index.module.css'
import useSWR from "swr";
import Skeleton from 'react-loading-skeleton';

import PostList from '../components/index/PostList';
import DigestList from '../components/index/DigestList';

const postFetcher = url => fetch(url).then(res => res.json())

const Index = () => {
  //* Postsデータ取得
  const {data, error} = useSWR("/api/posts", postFetcher);
  if (error) return <>Failed to load</>
  if (!data) return (
    <h1>{undefined || <Skeleton />}</h1>
  )

  const { posts, sentToList } = data;
  posts.map(post => {
    if (typeof(post.createdAt) === "string") {
      const iso_format = post.createdAt.split('.')[0];
      post.createdAt = new Date(iso_format);
    }
  })
  const digests = sentToList.map( sentTo => {
    return {sentTo: sentTo, messages: []};
  } );
  posts.map( post => {
    const dict = digests[sentToList.indexOf(post.sentTo)];
    dict.messages = dict.messages.concat(post.message)
  });

  return (
    <div className={styles.index_container}>
      <DigestList digests={digests} />
      <PostList posts={posts} display={6} sentToList={sentToList}/>
    </div>
  );
}

Index.layout = "index";

export default Index;