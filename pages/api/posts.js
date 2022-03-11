import { sentToData } from "../../constants/sentToConstants";

export default function handler(req, res) {
  const { tags, num } = req.query;
  // const tag_list = tags.split(",");

  const fetched_posts = [...Array(parseInt(num))].map((_, i) => {
    const j = Math.floor(Math.random() * post_list.length);
    return post_list[j];
  });
  const shuffled = arr => {
    arr.sort(()=> Math.random() - 0.5);
    return arr;
  }
  let posts = [];
  const sentToSet = new Set();
  fetched_posts.map( (post, i) => {
    const num_list = Array(12).fill(0).map((_, i) => i+1);
    const nums = shuffled(num_list).map(num => {
      return (num<=9) ? "0"+num : String(num);
    })
    const createdAt = `20${nums[0]}-${nums[1]}-${nums[2]}T${nums[3]}:${nums[4]}:${nums[5]}.000Z`;
    const sentTo = sentToData[post.sentToId];
    sentToSet.add(sentTo);
    const new_data = {
      createdAt:createdAt,
      likes: Math.floor(Math.random()*1000),
      tags: [sentTo, other_tags[Math.floor(Math.random()*other_tags.length)]],
      sentTo: sentTo
    }
    posts[i] = {...post, ...new_data};
  })

  // //* タグによるソート
  // const nums_of_tag = tag_list.length;
  // const sorted_posts = posts.filter( post => {
  //   const temp_tag_list = post.tags;
  //   const tag_union = new Set([...tag_list, ...temp_tag_list]);
  //   //* 集合(set)にして数が少なくなれば、タグを含むということ;
  //   return (tag_union.size < nums_of_tag + temp_tag_list.length)
  // })

  const cast_data = {
    posts: posts,
    sentToList: [...sentToSet]
  }

  res.status(200).json(cast_data)
}


//TODO delete
const message = "アルパカ食べたいアルパカ食べたいアルパカ食べたいアルパカ食べたいアルパカ食べたいアルパカ食べたいアルパカ食べたいアルパカ食べたいアルパカ食べたい"
const post_list = [
  {
    sentToId: 0,
    message: "いつも私たちのために最前線で働いてくださり、ありがとうございます！"},
  {
    sentToId: 1,
    message: "はやく治りますように！"},
  {
    sentToId: 2,
    message: "いつも美味しいご飯をありがとうございます。"},
  {
    sentToId: 3,
    message: message},
]

const other_tags = [
  "学校", "自然", "病院", "犬", "癒し", "ベッド", "酒"
]
