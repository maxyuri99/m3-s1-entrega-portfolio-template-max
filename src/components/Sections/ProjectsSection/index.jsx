import { ProjectList } from "../../ProjectList"
import { projects } from "../../../data/projects"

export const ProjectsSection = () => {
    return (
        <section>
            <h2>Projetos</h2>
            <ProjectList projectlist={projects}/>
        </section>
    )
}