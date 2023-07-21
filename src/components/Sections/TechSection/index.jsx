import { TechList } from "../../TechList"
import { technologies } from "../../../data/technologies"
import styles from  "./styles.module.css"

export const TechSection = () => {
    return (
        <section className={styles.flexBox}>
            <h2 className="title2">Tecnologias</h2>
            <TechList techlist={technologies}/>
        </section>
    )
}