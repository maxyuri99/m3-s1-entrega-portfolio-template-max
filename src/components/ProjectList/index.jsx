import { ProjectCard } from "../ProjectCard"
import styles from "./styles.module.css"

export const ProjectList = ({ projectlist }) => {
    return (
        <ul className={styles.flexBox}>
            {projectlist.map(project => {
                return (
                    ProjectCard(project)
                )
            }) }
        </ul>
    )
}