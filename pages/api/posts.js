// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {

  //TODO delete
  const message = "アルパカ食べたいアルパカ食べたいアルパカ食べたいアルパカ食べたいアルパカ食べたいアルパカ食べたいアルパカ食べたいアルパカ食べたいアルパカ食べたい"
  const post_list = [
    {sentTo_1: "医療従事者", sentTo_2: "の方", message: "いつも私たちのために最前線で働いてくださり、ありがとうございます！"},
    {sentTo_1: "コロナに", sentTo_2: "感染した方", message: "はやく治りますように！"},
    {sentTo_1: "飲食店に", sentTo_2: "勤務の方", message: "いつも美味しいご飯をありがとうございます。"},
    {sentTo_1: "アルパカ", sentTo_2: "の方", message: message},
  ]
  const posts = [...Array(20)].map((_, i) => {
    const j = Math.floor(Math.random() * post_list.length);
    return post_list[j];
  });

  res.status(200).json(posts)
}