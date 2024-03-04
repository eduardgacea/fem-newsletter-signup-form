import Button from "../../ui/button/Button";

import styles from "./Confirmation.module.css";

function Confirmation({ email }: { email: string }) {
    return (
        <div className={styles.confirmation}>
            <div className={styles.container}>
                <img src="icon-success.svg" />
                <h1>Thanks for subscribing!</h1>
                <p>
                    A confirmation email has been sent to <span>{email}</span>. Please open it and click the button
                    inside to confirm your subscription
                </p>
            </div>
            <Button>Dismiss message</Button>
        </div>
    );
}

export default Confirmation;
