import styles from "../styles/Navbar.module.css";
import "../styles/globals.css"

export default function Navbar() {
    return (
        <div className="border-b-2 w-full pt-4 pb-4">
            <div className="main-container flex items-center justify-between">
                <div className="mr-4">
                    <img className={styles.logo} src="src/assets/Logo.png" alt="logo"/>
                </div>
                <div className="flex space-x-6;">
                    <div className={styles.navbarPoints}>
                        <p className="text-lavender">Main</p>
                        <p className="text-greyDark">About</p>
                        <p className="text-greyDark">Get in touch</p>
                    </div>
                    <div className={styles.burgerMenu}>
                        <img src="src/assets/menu.png" alt="logo"/>
                    </div>
                </div>
            </div>
        </div>
    );
}
