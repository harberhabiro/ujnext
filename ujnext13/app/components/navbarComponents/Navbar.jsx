import styles from "./navcss/NavBar.module.css";
import NavCenter from "./navCenter";
import SearchBar from "./searchBar";
import NavLinks from "./NavLinks";

export default function NavBar() {
    return (
        <nav className={styles.navBar}>
            <h1 className={styles.logo}>Unethical Jokes</h1>
            <NavCenter />
            <SearchBar />
            <NavLinks />
        </nav>
    )
}