import { ProjectCard } from "../ProjectCard"

export const ProjectList = ({ projectlist }) => {
    return (
        <ul>
            {projectlist.map(project => {
                return (
                    ProjectCard(project)
                )
            }) }
        </ul>
    )
}