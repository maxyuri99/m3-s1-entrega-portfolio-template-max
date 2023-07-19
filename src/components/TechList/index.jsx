import { TechCard } from "../TechCard"

export const TechList = ({ techlist }) => {
    return (
        <ul>
            {techlist.map(icon => {
                return (
                    TechCard(icon)
                )
            }) }
        </ul>
    )
}