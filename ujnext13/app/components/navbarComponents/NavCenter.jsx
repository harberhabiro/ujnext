"use client"
import styles from './navcss/NavBar.module.css';
import Link from 'next/link';

//don't forget to add click

export default function NavCenter() {
    return (
        <div className={styles.navCenter}>
            <div className={styles.burger}>
                <Link href="#" className={styles.burgerLink}><i className="fa fa-reorder"></i></Link>
            </div>
            <div className={styles.textNav}>
                <Link className={styles.textNavLinks} href="#">Joke</Link>
                <Link className={styles.textNavLinks} href="#">Leaderboard</Link>
                <Link className={styles.textNavLinks} href="/about">About Us</Link>
                <Link className={styles.textNavLinks} href="/contact">Contact Us</Link>
            </div>
        </div>
    )
}