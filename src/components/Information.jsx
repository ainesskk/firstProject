import Interests from "./Interests.jsx";
import Education from "./Education.jsx";
import styles from "../styles/Greeting.module.css";
import {Link} from "react-scroll";

export default function Information() {
    return (
        <>
            <div className="grid grid-cols-2 gap-x-[30px] xl:grid-cols-12 xl:gap-x-[30px]">
                <Interests/>
                <Education/>
            </div>
            <Link  to="contactme" smooth={true} duration={500}>
                <button
                    className="btn flex mt-[48px] mb-[100px] md:hidden">
                    <p className="btn-text">Get in touch</p>
                    <img className={styles.sendBtn} src="src/assets/Send.svg" alt="send"/>
                </button>
            </Link>
        </>
    )
}