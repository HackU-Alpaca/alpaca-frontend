const add_like = async message_id => {

  const url = "api/likes/?message_id="+message_id;

  const res = await fetch(url);

  //* ステータスコード200~299でない
  if (!res.ok) {
    const error = new Error('An error occurred while fetching the data.');
    error.info = res.statusText;
    error.status = res.status;
    throw error;
  }

  return res.json();
}

const get_like = async (url) => {

  const requestOptions = {
    method: 'GET',
    // headers: { 'Content-Type': 'application/json' }
  };

  //* flag: true → likeをつける
  //* flag: false → likeを解除する
  const res = await fetch(url, requestOptions);

  //* ステータスコード200~299でない
  if (!res.ok) {
    const error = new Error('An error occurred while fetching the data.');
    error.info = res.statusText;
    error.status = res.status;
    throw error;
  }

  return res.json();
}

export { add_like, get_like };