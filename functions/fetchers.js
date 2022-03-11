const postFetcherByTag = async url => {

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

export { postFetcherByTag };