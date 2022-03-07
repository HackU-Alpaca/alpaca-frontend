// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const posts = [...Array(20)].map((_, i) => {
    const j = Math.floor(Math.random() * post_list.length);
    return post_list[j];
  });

  const cast_data = {
    posts: posts,
    sentToList: sentToList
  }

  res.status(200).json(cast_data)
}


//TODO delete
const message = "アルパカ食べたいアルパカ食べたいアルパカ食べたいアルパカ食べたいアルパカ食べたいアルパカ食べたいアルパカ食べたいアルパカ食べたいアルパカ食べたい"
const post_list = [
  {sentTo: "医療従事者", message: "いつも私たちのために最前線で働いてくださり、ありがとうございます！"},
  {sentTo: "コロナ感染者", message: "はやく治りますように！"},
  {sentTo: "飲食店従業員", message: "いつも美味しいご飯をありがとうございます。"},
  {sentTo: "アルパカ", message: message},
]


const sentToList = [
  "医療従事者", "コロナ感染者", "飲食店従業員", "アルパカ"
]