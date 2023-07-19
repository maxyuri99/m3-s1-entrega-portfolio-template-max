import { TechList } from "../../TechList"
import { technologies } from "../../../data/technologies"

export const TechSection = () => {
    return (
        <section>
            <h2>Tecnologias</h2>
            <TechList techlist={technologies}/>
        </section>
    )
}