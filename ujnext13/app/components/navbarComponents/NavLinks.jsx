import styles from './navcss/NavBar.module.css';
import Link from 'next/link';

export default function NavLinks() {
    return (
        <div className={styles.navRight}>
            <Link href="/account/login" className={styles.navRightLink}>Login</Link>
            <Link href="/account/register" className={styles.navRightLink}>Register</Link>
        </div>      
    )
}