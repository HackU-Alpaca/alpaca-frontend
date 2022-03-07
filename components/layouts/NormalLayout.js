import Header from './Header';
import Footer from './Footer';
import styles from '../../styles/index/IndexLayout.module.css';

export default function NormalLayout({ children }) {
  return (
    <div className={styles.layout_container}>
      {/* <Header /> */}

      <main>{children}</main>

      <Footer />
    </div>
  );
}