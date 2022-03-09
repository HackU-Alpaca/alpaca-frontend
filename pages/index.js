import styles from '../styles/index/Index.module.css'
import useSWR from "swr";

import PostList from '../components/index/PostList';
import DigestList from '../components/index/DigestList';

const postFetcher = url => fetch(url).then(res => res.json())

const Index = () => {
  const {data, error} = useSWR("/api/posts", postFetcher);
  if (error) return <>Failed to load</>
  if (!data) return <>Loading...</>

  const { posts, sentToList } = data;
  posts.map(post => {
    if (typeof(post.createdAt) !== "string") return ;
    const iso_format = post.createdAt.split('.')[0];
    post.createdAt = new Date(iso_format);
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