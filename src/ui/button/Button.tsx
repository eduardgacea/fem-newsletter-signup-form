import styles from "./Button.module.css";

type ButtonProps = {
    value?: string;
    children?: React.ReactNode;
    onClick?: (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.MouseEvent<HTMLInputElement, MouseEvent>
    ) => void;
};

function Button({ children, value, onClick }: ButtonProps) {
    return children ? (
        <button className={styles.btn} onClick={onClick}>
            {children}
        </button>
    ) : (
        <input className={styles.btn} type="submit" value={value} onClick={onClick} />
    );
}

export default Button;
