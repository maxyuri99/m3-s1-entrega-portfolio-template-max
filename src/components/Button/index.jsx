export const Button = ({ type, children }) => {
    return (
        <button
            // className={styles.button}
            type={type}
        >
            {children}
        </button>
    )
}