import styles from '../styles/index/Index.module.css';
import useSWR from "swr";
import { useRouter } from 'next/router';
import { postFetcher } from "../functions/fetchers";

import PostList from '../components/index/PostList';
import DigestList from '../components/index/DigestList';
import SkeletonIndex from '../components/skeletons/SkeletonIndex';

const Index = () => {
  const router = useRouter();
  //* Postsデータ取得
  const {data, error} = useSWR("/api/posts", postFetcher);
  if (error) router.push("/error/"+error.status);
  if (!data) return <SkeletonIndex />

  const style = document.getElementById("__next").firstChild.style
  style.backgroundSize = "contain";

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