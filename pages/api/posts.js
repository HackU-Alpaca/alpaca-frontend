// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const posts = [...Array(20)].map((_, i) => {
    const j = Math.floor(Math.random() * post_list.length);
    return post_list[j];
  });
  const shuffleArray = arr => {
    arr.sort(()=> Math.random() - 0.5);
  }
  posts.map( post => {
    const num_list = Array(12).fill(0).map((_, i) => i+1);
    shuffleArray(num_list);
    const nums = num_list.map(num => {
      return (num<=9) ? "0"+num : String(num);
    })
    const createdAt = `20${nums[0]}-${nums[1]}-${nums[2]}T${nums[3]}:${nums[4]}:${nums[5]}.000Z`
    post.createdAt = createdAt;
  })

  const cast_data = {
    posts: posts,
    sentToList: sentToList
  }

  res.status(200).json(cast_data)
}


//TODO delete
const message = "アルパカ食べたいアルパカ食べたいアルパカ食べたいアルパカ食べたいアルパカ食べたいアルパカ食べたいアルパカ食べたいアルパカ食べたいアルパカ食べたい"
const post_list = [
  {
    sentTo: "医療従事者",
    message: "いつも私たちのために最前線で働いてくださり、ありがとうございます！"},
  {
    sentTo: "コロナ感染者",
    message: "はやく治りますように！"},
  {
    sentTo: "飲食店従業員",
    message: "いつも美味しいご飯をありがとうございます。"},
  {
    sentTo: "アルパカ",
    message: message},
]

const sentToList = [
  "医療従事者", "コロナ感染者", "飲食店従業員", "アルパカ"
]