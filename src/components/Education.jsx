import styles from "../styles/Education.module.css";

export default function Education(){
    return (
        <>
            <div className={styles.educationContainer}>
                <p className="subtitle mt-12 md:mt-16 xl:mt-20 mb-7 md:mb-11">Education & Experience</p>
                <div className={styles.educationItems}>
                    <div className={styles.educationItem}>
                        <div className={styles.dates}>
                            <p className="body-text">2008 - Present</p>
                        </div>
                        <div className={styles.itemInfo}>
                            <p className="subtitle2">Middle Frontend developer</p>
                            <p className="body-text pt-2 pb-3 md:pb-8">Ozon</p>
                        </div>
                    </div>
                    <div className={styles.educationItem}>
                        <div className={styles.dates}>
                            <p className="body-text">2006 - 2007</p>
                        </div>
                        <div className={styles.itemInfo}>
                            <p className="subtitle2">Junior Frontend developer</p>
                            <p className="body-text pt-2 pb-3 md:pb-8">Facebook</p>
                        </div>
                    </div>
                    <div className={styles.educationItem}>
                        <div className={styles.dates}>
                            <p className="body-text">2000 - 2005</p>
                        </div>
                        <div className={styles.itemInfo}>
                            <p className="subtitle2">Frontend developer</p>
                            <p className="body-text pt-2 pb-3 md:pb-8 ">Stanford University</p>
                        </div>
                    </div>
                </div>
            </div>
            </>
    )
}