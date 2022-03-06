// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const { digest } = req.query;
  console.log(digest);

  const messages = [
    "いつも私たちのために最前線で働いてくださり、ありがとうございます！",
    "アルパカ食べたいアルパカ食べたいアルパカ食べたいアルパカ食べたいアルパカ食べたいアルパカ食べたいアルパカ食べたいアルパカ食べたいアルパカ食べたいアルパカ食べたいアルパカ食べたいアルパカ食べたいアルパカ食べたいアルパカ食べたいアルパカ食べたいアルパカ食べたいアルパカ食べたいアルパカ食べたいアルパカ食べたいアルパカ食べたい"
  ]
  const digests = [...Array(5)].map((_, i) => {
    const j = Math.floor(Math.random() * messages.length);
    return messages[j];
  });

  res.status(200).json(digests)
}