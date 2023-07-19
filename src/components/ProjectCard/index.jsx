import gitIcon from "../../assets/git-icon.png"

export const ProjectCard = ({ description, name, id }) => {
    return (

        <li key={id}>
            <div>
                <h3>{name}</h3>
                <p>{description}</p>
                <a href="">Saiba mais</a>
            </div>
            <img src={gitIcon} alt="gitIcon" />
        </li>

    )
}