import { Button } from "../Button"

export const Header = () => {
    return (
        <header>
            <div className='container'>
                <div className='styles.flexbox'>
                    <h1>Portifólio</h1>
                    <ul>
                        <li>Sobre</li>
                        <li>Stack</li>
                        <li>Projetos</li>
                    </ul>
                    <Button type="button">Contato</Button>
                </div>
            </div>
        </header>
    )
}