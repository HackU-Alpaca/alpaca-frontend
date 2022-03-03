import styles from '../styles/Index.module.css'
import { useState, useEffect } from 'react';

import { getImages } from '../pixabay';
import CommentList from '../components/index/CommentList';

const Index = () => {
  const [images, setImages] = useState({hits: []});
  useEffect(() => {
    getImages().then( images => setImages(images) )
  }, [])


  return (
    <div className={styles.index_container}>
      <CommentList
        images={images.hits}
      />
    </div>
  );
}

export default Index;