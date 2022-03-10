import styles from '../styles/Error.module.css';
import { useRouter } from 'next/router';
import Image from "next/image";
import Link from "next/link";
import App from './_app';

const ErrorIndex = () => {
  const router = useRouter();
  const { error: status } = router.query;

  //* エラー情報セット
  const error_dict = {
    "401": {
      info: "Unauthorized",
      description: "ID、パスワードが必要です。"
    },
    "403": {
      info: "Forbidden",
      description: "アクセス権限がありません。"
    },
    "404": {
      info: "Not Found",
      description: "お探しのページは存在しません。"
    },
    "408": {
      info: "Request Timeout",
      description: "サーバーがタイムアウトしました。"
    },
    "500": {
      info: "Internal Server Error",
      description: "サーバー側でエラーが発生しました。"
    },
    "502": {
      info: "Bad Gateway",
      description: "無効なリクエストです。"
    },
    "503": {
      info: "Service Unavailable",
      description: "現在サーバーに負荷がかかっています。"
    },
    "504": {
      info: "Gateway Timeout",
      description: "制限時間内に処理できませんでした。"
    },
  }

  let code, info, description;
  if (Object.keys(error_dict).includes(String(status))) {
    code = status
    info = error_dict[status].info;
    description = error_dict[status].description;
  } else {
    code = "404"
    info = "Not Found";
    description = "お探しのページは存在しません。";
  }
  return (
    <div className={styles.layout_container}>

      <header>
        <Link href="/">
          <a>
            <h1 className="shelby">{App.title}</h1>
          </a>
        </Link>
        <div>
          <h2 className="shelby">{code}</h2>
          <p className="flower-butterfly">{info}</p>
        </div>
      </header>

      <div className={styles.content}>
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

      <h3>SORRY</h3>
      <Image
        src="/icons/Alpaca.png"
        alt="アルパカさん"
        width={500}
        height={500}
      />
    </div>
  );
}

ErrorIndex.layout = "error"

export default ErrorIndex;