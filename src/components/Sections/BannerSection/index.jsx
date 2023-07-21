import { Button } from "../../Button"
import bannerImg from "../../../assets/banner-img.png"
import { username } from "../../../data/user"
import styles from "./styles.module.css"

export const BannerSection = () => {

    return (
        <section className={styles.flexBox}>
            <div>
            <span className="text-blue">{username}</span>
            <h2 className="title1">Bem vindo ao meu portfólio</h2>
            <p className="paragraph">Uma Frase Interessante sobre mim</p>
            <Button type="button">Saiba mais</Button>
            </div>
            <img src={bannerImg} alt="BannerImg" />
        </section>
    )

}