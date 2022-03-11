
export default function handler(req, res) {
  const { message_id } = req.query;

  console.log(message_id);

  // const cast_data = {
  //   like: true
  // }

  res.status(200).json({isLiked: (Math.random() >= 0.5)})
}
