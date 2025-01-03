import styles from "../styles/Greeting.module.css"
import {Link} from "react-scroll";

export default function Greeting() {
    return (
        <>
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
                            <img className={styles.sendBtn} src="src/assets/Send.svg" alt="send"/>
                        </button>
                    </Link>
                </div>
            </div>

        </>
    )
}


// <div className={styles.greetingMainContainer}>
//     <div className="col-span-1 md:col-span-4 xl:col-span-5">
//         <h1 className="pt-[27px] md:pt-[44px] xl:pt-[166px]">Hey, I’m Nick</h1>
//         <p className="body-text pt-4">Frontend developer</p>
//         <div className={styles.borderElement}>
//             <p className="body-text pt-[24px]">Help you to create high-quality digital<br></br>
//                 products that your clients will love and let your business thrive</p>
//         </div>
//     </div>
//
//     <div className={styles.manContainer}>
//         <img className={styles.man} src="src/assets/happy_man.png" alt="gradient"/>
//     </div>
// </div>
// {/*<div className={styles.gradientTriangle}>*/
// }
// {/*    <img className={styles.gradient} src="src/assets/gradient.png" alt="gradient"/>*/
// }
// {/*</div>*/
// }
// <h1 className="pt-[166px]">Hey, I’m Nick</h1>
// <p className="body-text pt-4">Frontend developer</p>
// <div className={styles.borderElement}>
//     <p className="body-text pt-[24px]">Help you to create high-quality digital
//         products that your clients will love and let your business thrive</p>
// </div>