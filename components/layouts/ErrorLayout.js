import App from '../../pages/_app';
import Head from 'next/head';
import Footer from './Footer';
import styles from '../../styles/Error.module.css';

export default function ErrorLayout({ children }) {
  return (
    <div>
      <Head>
        <title>{App.title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content={App.title}
        />
      </Head>

      <main>{children}</main>
    </div>
  );
}