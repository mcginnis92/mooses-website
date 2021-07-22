import styles from "../styles/Home.module.css";
import Link from "next/link";

const Navigation = () => (
    <nav className={styles.nav}>
        <ul className={styles.navList}>
            <Link href="/">
                <a className={`${styles.navLink} ${styles.navLinkBig}`}>{'Home'}</a>
            </Link>
            <Link href="/about">
                <a className={`${styles.navLink} ${styles.navLinkBig}`}>{'About Moose'}</a>
            </Link>
            <Link href="/contact">
                <a className={`${styles.navLink} ${styles.navLinkBig}`}>{'Contact Moose'}</a>
            </Link>
        </ul>
    </nav>
);

export default Navigation;