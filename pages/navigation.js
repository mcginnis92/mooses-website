import styles from "../styles/Home.module.css";
import Link from "next/link";

const Navigation = () => (
    <nav className={styles.nav}>
        <ul>
            <Link href="/"><a>{'Home'}</a></Link>
            <Link href="/about"><a>{'About Moose'}</a></Link>
            <Link href="/contact"><a>{'Contact Moose'}</a></Link>
        </ul>
    </nav>
);

export default Navigation;