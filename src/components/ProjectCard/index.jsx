import gitIcon from "../../assets/git-icon.png"

export const ProjectCard = ({ description, name, id }) => {
    return (

        <li key={id}>
            <div>
                <h3 className="title3">{name}</h3>
                <p className="paragraph">{description}</p>
                <a className="anchor">Saiba mais</a>
            </div>
            <img src={gitIcon} alt="gitIcon" />
        </li>

    )
}