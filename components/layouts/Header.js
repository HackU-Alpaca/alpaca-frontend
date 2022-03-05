import App from "../../pages/_app";
import Link from "next/link";
import Head from 'next/head';
const Header = () => {

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
        <Link href="/">
          <a>{App.title}</a>
        </Link>
      </header>
    </>
  );
}

export default Header;