
export default function handler(req, res) {
  const { message_id } = req.query;

  console.log(message_id);

  const url = "https://hacku-alpaca-backend.herokuapp.com/likes/?message_id="+message_id

  fetch(url)
    .then(res => res.json())
    .then(data => {

      console.log(data);

      res.status(200).json({})
    })

}
