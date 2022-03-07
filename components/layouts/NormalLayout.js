import NormalHeader from './NormalHeader';
import Footer from './Footer';
import styles from '../../styles/normal/NormalLayout.module.css';

export default function NormalLayout({ children }) {
  return (
    <div className={styles.layout_container}>
      <NormalHeader />

      <main>{children}</main>

    </div>
  );
}