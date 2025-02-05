import styles from "../styles/Navbar.module.css";
import "../styles/globals.css"
import { Link } from 'react-scroll';
import logo from "./../assets/Logo.png";
import menu from "./../assets/menu.png"

export default function Navbar() {
    return (
        <div className="border-b-2 w-full pt-4 pb-4">
            <div className="main-container flex items-center justify-between">
                <div className="mr-4">
                    <img className={styles.logo} src={logo} alt="logo"/>
                </div>
                <div className="flex space-x-6;">
                    <div className={styles.navbarPoints}>
                        <p className="text-lavender cursor-pointer">Main</p>
                        <Link to="aboutme" smooth={true} duration={500}>
                            <p className="text-greyDark cursor-pointer">About</p>
                        </Link>
                        <Link to="contactme" smooth={true} duration={500} >
                            <p className="text-greyDark cursor-pointer">Get in touch</p>
                        </Link>
                    </div>
                    <div className={styles.burgerMenu}>
                        <img src={menu} alt="logo"/>
                    </div>
                </div>
            </div>
        </div>
    );
}
