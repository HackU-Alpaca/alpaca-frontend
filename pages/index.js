import styles from '../styles/index/Index.module.css';
import useSWR from "swr";
import { useRouter } from 'next/router';
import { postFetcherByTag, convert_time } from "../functions/";

import PostList from '../components/index/PostList';
import DigestList from '../components/index/DigestList';
import SkeletonIndex from '../components/skeletons/SkeletonIndex';

const Index = () => {
  const router = useRouter();
  //* Postsデータ取得
  const num = 30;
  const tags = ["主婦", "学生", "医療従事者", "受験生", "サラリーマン", "飲食店従業員", "コロナ感染者"];
  const {data, error} = useSWR("/api/posts?num="+num+"&tags="+tags, postFetcherByTag);
  if (error) router.push(`/${error.status}`);
  if (!data) return <SkeletonIndex />;

  const { posts, sentToList } = data;
  const time_converted_posts = convert_time(posts);
  const digests = sentToList.map( sentTo => {
    return {sentTo: sentTo, messages: []};
  } );
  time_converted_posts.map( post => {
    const dict = digests[sentToList.indexOf(post.sentTo)];
    dict.messages = dict.messages.concat(post.message)
  });

  return (
    <div className={styles.index_container}>
      <DigestList digests={digests} />
      <PostList
        posts={time_converted_posts}
        display={6}
        sentToList={sentToList}
      />
    </div>
  );
}

Index.layout = "index";

export default Index;