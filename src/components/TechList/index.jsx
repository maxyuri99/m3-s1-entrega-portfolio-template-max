import { TechCard } from "../TechCard"
import styles from "./styles.module.css"

export const TechList = ({ techlist }) => {
    return (
        <ul className={styles.flexBox}>
            {techlist.map(icon => {
                return (
                    TechCard(icon)
                )
            }) }
        </ul>
    )
}