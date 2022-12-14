import './style.css'
import MenuLink from '../MenuLink'

const Navegacao = () => {

    return(
        <nav className='menu-navegacao'>
            <MenuLink to='/'>Home</MenuLink>
            <MenuLink to='/SobreMim'>Sobre mim</MenuLink>
        </nav>
    )

}

export default Navegacao
