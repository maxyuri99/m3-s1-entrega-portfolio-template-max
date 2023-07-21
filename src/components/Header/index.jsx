import { Button } from "../Button"
import styles from "./styles.module.css"
import logoImg from "../../assets/portfolio.png"
import { HeaderCard } from "./HeaderCard"

export const Header = () => {
    return (
        <header >
            <div className="container">
                <div className={styles.header}>
                    <img src={logoImg} alt="Logo Portfólio" />
                    <ul className={styles.flexBox}>
                        <HeaderCard>Sobre</HeaderCard>
                        <HeaderCard>Stack</HeaderCard>
                        <HeaderCard>Projetos</HeaderCard>
                    </ul>
                    <Button type="button">Contato</Button>
                </div>
            </div>
        </header>
    )
}