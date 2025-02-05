import styles from "../styles/Greeting.module.css";
const Button = () => {

    return (
        <button
            className="btn flex mt-[48px] mb-[100px] md:hidden">
            <p className="btn-text">Get in touch</p>
            <img className={styles.sendBtn} src={send} alt="send"/>
        </button>
    )
}

export default Button;