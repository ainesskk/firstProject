import styles from "../styles/Greeting.module.css"

export default function Greeting() {
    return (
        <>
            <h1 className="">Hey, I’m Nick</h1>
            <p className="body-text">Frontend developer</p>
            <p className="body-text">Help you to create high-quality digital products that your clients will love
                and let your business thrive</p>
            <div className="rounded-4xl w-96 h-96 rotate-45 bg-amber-100 overflow-hidden">
                <img className={styles.gradient} src="src/assets/gradient.png" alt="gradient" />
            </div>
        </>
    )
}
