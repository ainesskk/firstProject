import "../styles/ContactMe.css";
import {useState} from "react";
import {validateName, errors, validateEmail} from "../js/validationFuncs.js";
import send from "./../assets/SendV.svg";

export default function ContactMe() {
    const [condition, setCondition] = useState({ name: "", email: ""});
    const [error, setError] = useState({ name: "", email: ""});

    const onChange = (e) => {
        const { name, value } = e.target;

        if (condition[name] === "error") return

        if (value !== "") {
            setCondition(prevState => ({ ...prevState, [name]: "filled" }));
        } else {
            setCondition(prevState => ({ ...prevState, [name]: "" }));
        }
    };

    const onClick = (e) => {
        e.preventDefault();

        let nameCondition, nameError, emailCondition, emailError;
        const nameWords = validateName(e.target.name.value);
        const emailTest = validateEmail(e.target.email.value);

        if (nameWords === 0) {
            nameCondition = "error";
            nameError = errors[0];
        } else if (nameWords === 2) {
            nameCondition = "filled";
            nameError = "";
        } else {
            nameCondition = "error";
            nameError = errors[1];
        }

        if ((e.target.email.value).trim() === "") {
            emailCondition = "error";
            emailError = errors[0];
        } else if (!emailTest) {
            emailCondition = "error";
            emailError = errors[2];
        } else {
            emailCondition = "filled";
            emailError = "";
        }

        setCondition({ name: nameCondition, email: emailCondition });
        setError({ name: nameError, email: emailError });
    };

    return (
        <>
            <div className="bgContainer">
                <div className="contactMeContainer">
                    <div className="flex justify-center md:justify-start mb-9 md:mb-12">
                        <h2>Let’s discuss your project</h2>
                    </div>
                    <div className="formContainer">
                        <form onSubmit={onClick}>
                            <div className="grid grid-cols-2 gap-[20px] gap-x-6 xl:gap-[24px]">
                                <div className="flex flex-col col-span-2 md:col-span-1">
                                    <label className="labelText" htmlFor="name">Your full name <span className="text-red">*</span></label>
                                    <input type="text" className={`body-text2 ${condition.name}`}
                                           placeholder="Name Surname" name="name" onChange={onChange} />
                                    <p className="errorText">{error.name}</p>
                                </div>
                                <div className="flex flex-col col-span-2 md:col-span-1">
                                    <label className="labelText" htmlFor="email">Your email <span
                                        className="text-red">*</span></label>
                                    <input type="text" className={`body-text2 ${condition.email}`}
                                           placeholder="name@example.com" name="email" onChange={onChange}/>
                                    <p className="errorText">{error.email}</p>
                                </div>
                                <div className="flex flex-col col-span-2">
                                    <label className="labelText" htmlFor="project">Tell me about your project</label>
                                    <textarea rows="4" className="body-text2" placeholder="Add here a general description of your idea and target aim"
                                           name="project"/>
                                </div>
                            </div>
                            <button className="btn flex mt-9">
                                <p className="btn-text">Submit</p>
                                <img className="sendBtn" src={send} alt="send"/>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
