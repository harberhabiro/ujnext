"use client"
import styles from "./navcss/NavBar.module.css";

export default function SearchBar() {
    return (
        <div className={styles.searchBar}>
            <form >
                <input type="text" name="search" placeholder="Search for jokes" />
                <button><i className="fa fa-search"></i></button>
            </form> 
        </div>
    )
}