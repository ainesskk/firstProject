import styles from "../styles/ContactMe.module.css";

export default function ContactMe() {

    const onClick  = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <div className={styles.bgContainer}>
                <div className="bg-[#FFFFFF] rounded-2xl py-12 mx-[10px] px-[5px] md:px-8 md:py-12 md:mx-10 md:my-[70px] xl:mx-[258px] xl:px-12">
                    <div className="flex justify-center md:justify-start mb-9 md:mb-12">
                        <h2>Let’s discuss your project</h2>
                    </div>
                    <div className={styles.formContainer}>
                        <form onSubmit={onClick}>
                            <div className="grid grid-cols-2 gap-[20px] gap-x-6 xl:gap-[24px]">
                                <div className="flex flex-col col-span-2 md:col-span-1">
                                    <label className={styles.labelText} htmlFor="name">Your full name <span className="text-red">*</span></label>
                                    <input className="body-text2" placeholder="Name Surname" name="name"/>
                                </div>
                                <div className="flex flex-col col-span-2 md:col-span-1">
                                    <label className={styles.labelText} htmlFor="email">Your email <span className="text-red">*</span></label>
                                    <input className="body-text2" placeholder="name@example.com" name="email"/>
                                </div>
                                <div className="flex flex-col col-span-2">
                                    <label className={styles.labelText} htmlFor="project">Tell me about your project</label>
                                    <input className="body-text2" placeholder="Add here a general description of your idea and target aim"
                                           name="project"/>
                                </div>
                            </div>
                            <button
                                className="btn flex mt-9">
                            <p className="btn-text">Submit</p>
                                <img className={styles.sendBtn} src="src/assets/Send.svg" alt="send"/>
                            </button>
                        </form>
                    </div>
                </div>
            </div>

        </>
    );
}
