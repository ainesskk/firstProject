import styles from "../styles/Greeting.module.css"
import {Link} from "react-scroll";
import send from "./../assets/SendV.svg"
import happyMan from "./../assets/happy_man.png"

export default function Greeting() {
    return (
        <>
            <div className={styles.greetingContainer}>
                <div className="main-container">
                    <div className="grid grid-cols-2 gap-[30px] sm2:grid-cols-3 md:grid-cols-6 xl:grid-cols-12">
                        <div className="col-span-2 sm2:col-span-2 md:col-span-4 xl:col-span-5">
                            <h1 className="pt-[27px] md:pt-[44px] xl:pt-[162px]">Hey, I’m Nick</h1>
                            <p className="body-text mt-1">Frontend developer</p>
                            <div className={styles.borderElement}>
                                <p className="body-text pt-[24px]">Help you to create high-quality digital
                                    products that your clients will love and let your business thrive</p>
                            </div>
                            <Link to="contactme" smooth={true} duration={500}>
                                <button
                                    className="btn flex mt-[27px] md:mt-[44px] xl:mt-[60px] mb-[225px] md:mb-[51px] xl:mb-[166px]">
                                    <p className="btn-text">Get in touch</p>
                                    <img className={styles.sendBtn} src={send} alt="send"/>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={styles.square}></div>
                <img  className={styles.imgContainer} src={happyMan} alt="happyMan"/>
            </div>
        </>
    )
}