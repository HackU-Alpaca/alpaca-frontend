const update_like = async (message_id, flag) => {

  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' }
  };

  const url = "alpaca/likes?message_id="+message_id;

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

export { update_like, get_like };