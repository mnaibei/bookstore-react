import { CgProfile } from 'react-icons/cg';
import styles from '../styles/NavBar.module.css';

const Navigation = () => (
  <>
    <nav className={styles.nav}>
      <div className={styles.title}>
        <h1>
          BookStore CMS
        </h1>
        <ul className={styles.navlinks}>
          <li className={styles.links}><a href="/" content="books">Books</a></li>
          <li className={styles.linksCat}><a href="/categories" content="categories">Categories</a></li>
        </ul>
      </div>
      <div className={styles.profile}>
        <CgProfile />
      </div>
    </nav>
  </>
);

export default Navigation;
