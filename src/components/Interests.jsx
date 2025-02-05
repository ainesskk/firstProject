import styles from "../styles/Interests.module.css";
import musicV from "./../assets/MusicV.svg"
import drawingV from "./../assets/drawingV.svg"
import PhotoV from "./../assets/PhotoV.svg"

export default function Interests() {
    return (
        <>
            <div className={styles.interestsContainer}>
                <p className="subtitle mt-12 md:mt-16 xl:mt-20 mb-7 md:mb-11 col-span-2 xl:col-span-6">Interests</p>
                    <div className={styles.interestsItems}>
                        <div className={styles.interestsItem}>
                            <div className={styles.itemIcon}>
                                <img className="w-[18px] md:w-6" src={musicV} alt="music"/>
                            </div>
                            <div className={styles.itemInfo}>
                                <p className="subtitle2 mb-1">Music</p>
                                <p className="body-text">Indie rock | Reggae</p>
                            </div>
                        </div>
                        <div className={styles.interestsItem}>
                            <div className={styles.itemIcon}>
                                <img className="w-[18px] md:w-6" src={drawingV} alt="music"/>
                            </div>
                            <div className={styles.itemInfo}>
                                <p className="subtitle2 mb-1">Art</p>
                                <p className="body-text">Edvard Munch | Frida Kahlo</p>
                            </div>
                        </div>
                        <div className={styles.interestsItem}>
                            <div className={styles.itemIcon}>
                                <img className="w-[18px] md:w-6" src={PhotoV} alt="music"/>
                            </div>
                            <div className={styles.itemInfo}>
                                <p className="subtitle2 mb-1">Photography</p>
                                <p className="body-text">Portraits</p>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}