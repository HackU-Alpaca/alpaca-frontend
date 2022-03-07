import IndexHeader from './IndexHeader';
import Footer from './Footer';
import styles from '../../styles/index/IndexLayout.module.css';

export default function IndexLayout({ children }) {
  return (
    <div className={styles.layout_container}>
      <IndexHeader />

      <main>{children}</main>

      <Footer />
    </div>
  );
}