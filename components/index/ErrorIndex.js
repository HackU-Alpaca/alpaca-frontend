import styles from '../../styles/index/Index.module.css';
import { useRouter } from 'next/router';

const ErrorIndex = props => {
  const { info, status } = props.error;
  const router = useRouter();

  try {
    const style = document.getElementById("__next").firstChild.style;
    style.backgroundSize = "cover";
    document.body.style.backgroundColor = "#E8FFFD"
  } catch {
    ;
  }

  return (
    <div className={styles.index_container}>
     <h2>{status}</h2>
     <p>{info}</p>

     <p onClick={()=>router.reload()}>戻る</p>
    </div>
  );
}

export default ErrorIndex;