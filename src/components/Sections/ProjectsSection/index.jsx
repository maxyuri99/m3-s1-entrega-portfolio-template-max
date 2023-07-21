import { ProjectList } from "../../ProjectList"
import { projects } from "../../../data/projects"
import styles from "./style.module.css"

export const ProjectsSection = () => {
    return (
        <section className={styles.flexBox}>
            <h2 className="title2">Projetos</h2>
            <ProjectList projectlist={projects}/>
        </section>
    )
}