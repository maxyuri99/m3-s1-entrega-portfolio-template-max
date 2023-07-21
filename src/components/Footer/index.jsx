import whatsappIcon from "../../assets/whatsapp-icon.png"
import linkedinIcon from "../../assets/linkedin-icon.png"
import githubIcon from "../../assets/github-icon.png"
import { FooterCard } from "./FooterCard";
import { user } from "../../data/user"

import styles from "./styles.module.css"


export const Footer = () => {
    return (
        <footer className={`${styles.footer}`}>
            <div className={`${styles.divController} `}>
                <div className={styles.flexBox}>
                    <h2 className="title2">Contato</h2>
                    <ul className={styles.icons}>
                        <FooterCard src={whatsappIcon} alt={"iconWhats"}/>
                        <FooterCard src={linkedinIcon} alt={"iconLinkedin"}/>
                        <FooterCard src={githubIcon} alt={"iconGithub"}/>
                    </ul>
                </div>
                <p className="paragraph">Todos os direitos reservados - {user}</p>
            </div>
        </footer>
    )
}