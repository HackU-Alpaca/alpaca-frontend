import App from "../../pages/_app";
import Link from "next/link";
import Head from 'next/head';
const IndexHeader = () => {

  return (
    <>
      <Head>
        <title>{App.title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content={App.title}
        />
      </Head>

      <header>
        <Link href="/add">
          <a>
            <img src="/icons/add_icon.svg" alt="投稿" className="add-icon" />
          </a>
        </Link>

        <div>
          <h1 className="shelby">{App.title}</h1>
          <p className="flower-butterfly">その思い、届けてみませんか？</p>
        </div>

      </header>
    </>
  );
}

export default IndexHeader;