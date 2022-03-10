import styles from '../../styles/Error.module.css';
import { useRouter } from 'next/router';
import Image from "next/image";
import Link from "next/link";

const ErrorIndex = () => {
  const router = useRouter();
  const { status } = router.query;
  const window_width =  window.innerWidth;
  // try {
  //   const layout_style = document.getElementsByClassName(styles.layout_container)[0].style
  //   layout_style.gridTemplateRows = "250px 1fr "+window_width+"px";
  // } catch (error) {
  //   console.error(error);
  // }

  //* エラー文作成
  let info, title, description;
  switch (status) {
    case "404":
      info = "Not found";
      title = "ページが見つかりませんでした。";
      description = "お探しのページは存在しないか、間違ったURLにデータを取得しようとしています。";
      break;

    default:
      info = "";
      title = "";
      description = "";
      break;
  }

  return (
    <div className={styles.layout_container}>

      <header>
        <div>
          <h1 className="shelby">{status}</h1>
          <p className="flower-butterfly">{info}</p>
        </div>
      </header>
      <div className={styles.content}>
        <h3>{title}</h3>
        <p className={styles.description}>{description}</p>

        <p className={styles.return}>
          ホーム画面に
          <Link href="/">
            <a>
              戻る
            </a>
          </Link>
        </p>
      </div>

      <Image
        src="/icons/Alpaca.png"
        alt="アルパカさん"
        width={window_width}
        height={window_width}
      />
    </div>
  );
}

ErrorIndex.layout = "error"

export default ErrorIndex;