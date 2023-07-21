export const TechCard = ({ img, name, id }) => {
    return (

        <li key={id}>
            <img src={img} alt={name} />
            <h3 className="title3">{name}</h3>
        </li>

    )
}