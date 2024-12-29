import styles from "../styles/AboutMe.module.css"

export default function AboutMe() {
    return (
        <>
            <h2 className="mt-[48px] md:mt-[80px] xl:mt-[100px]">About me</h2>
            <div className={styles.aboutContainer}>
                <div className={styles.roundContainer}>
                    <div className={styles.roundManContainer}>
                    </div>
                </div>
                <div className={styles.infoTextContainer}>
                    <div className={styles.borderElement}>
                        <p className="subtitle2">
                            <span className="subtitle-bold">Nick Richardson</span> - specialist in Frontend
                            development.
                            Clear code is my passion. Solving issues through negotiations.
                        </p>
                    </div>
                    <button className="btn hidden md:flex grid-cols-12 md:mt-[44px] xl:mt-[65px]">
                        <p className="btn-text">Get in touch</p>
                        <img className={styles.sendBtn} src="src/assets/Send.svg" alt="send"/>
                    </button>
                </div>
            </div>
        </>
    )
}
