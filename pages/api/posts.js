import {sentToData} from "../../constants/";

export default function handler(req, res) {
  const { tags, num } = req.query;
  const tag_list = tags.split(",");

  const alpaca = true;
  if (alpaca) {
    const base_url = "https://hacku-alpaca-backend.herokuapp.com/get_messages_by_tags/"+
      "?tags="+tag_list+
      "&num_of_message="+num;

    fetch(base_url)
      .then(res => res.json())
      .then(data => {

        let posts = [];
        const sentToSet = new Set();
        Array.from(data.messages).map( (post, i) => {
          sentToSet.add(post.sendTo);
          const new_data = {
            sentTo: post.sendTo,
            message_id: post.id,
            message: post.context
          }
          posts[i] = {...post, ...new_data};
        })

        const cast_data = {
          posts: posts,
          sentToList: [...sentToSet]
        }

        res.status(200).json(cast_data)
      })


  } else {

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
        tags: sentTo,
        sentTo: sentTo,
        isLiked: (Math.random() >= 0.5),
        message_id: Math.floor(Math.random()*10000),
        message: post.message
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
}
