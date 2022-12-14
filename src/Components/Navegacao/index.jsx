import './style.css'
import { Link } from "react-router-dom"

const Navegacao = () => {

    return(
        <nav className='menu-navegacao'>
            <Link className='menu-navegacao__link' to="/">Home</Link>
            <Link className='menu-navegacao__link' to="/SobreMim">Sobre mim</Link>
        </nav>
    )

}

export default Navegacao
