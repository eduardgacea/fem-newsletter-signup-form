import { validateEmail } from "../../utils/validateEmail";
import { useWindowSize } from "../../utils/useWindowSize";
import { useState } from "react";

import Button from "../../ui/button/Button";

import styles from "./Signup.module.css";

type SignupProps = {
    setShowSignup: React.Dispatch<React.SetStateAction<boolean>>;
    email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
};

function Signup({ setShowSignup, email, setEmail }: SignupProps) {
    const [isError, setIsError] = useState(false);

    const windowWidth = useWindowSize().width;

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (validateEmail(email)) {
            setShowSignup(false);
            setIsError(false);
        } else {
            setIsError(true);
        }
    }

    return (
        <div className={styles.signup}>
            <img src={`illustration-sign-up-${windowWidth < 1440 ? "mobile" : "desktop"}.svg`} />
            <div className={styles.container}>
                <h1>Stay updated!</h1>
                <p>Join 60,000+ product managers receiving monthly updates on:</p>
                <ul className={styles.ul}>
                    <li className={styles.li}>
                        <img src="icon-list.svg" />
                        <div>Product discovery and building what matters</div>
                    </li>
                    <li className={styles.li}>
                        <img src="icon-list.svg" />
                        <div>Measuring to ensure updates are a success</div>
                    </li>
                    <li className={styles.li}>
                        <img src="icon-list.svg" />
                        <div>And much more!</div>
                    </li>
                </ul>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.label}>
                        <label>Email address</label>
                        {isError && <div>Valid email required</div>}
                    </div>
                    <input
                        className={isError ? styles.error : ""}
                        type="email"
                        placeholder="email@company.com"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Button value="Subscribe to monthly newsletter" />
                </form>
            </div>
        </div>
    );
}

export default Signup;
