import styles from './styles.module.css'

export const Button = ({ type, children }) => {
    return (
        <button
            className={styles.button}
            type={type}
        >
            {children}
        </button>
    )
}