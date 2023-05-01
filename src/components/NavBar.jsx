import { CgProfile } from 'react-icons/cg';
import styles from '../styles/NavBar.module.css';

const Navigation = () => (
  <>
    <nav className={styles.nav}>
      <h1 className="title">
        BookStore CMS
      </h1>
      <ul className={styles.navlinks}>
        <li className="links"><a href="/" content="books">Books</a></li>
        <li className="links"><a href="/categories" content="categories">Categories</a></li>
      </ul>
      <div className="profile">
        <CgProfile />
      </div>
    </nav>
  </>
);

export default Navigation;
