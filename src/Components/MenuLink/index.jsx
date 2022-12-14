import './style.css'
import { useLocation, Link } from 'react-router-dom'

const MenuLink = ({to, children}) => {

    const localizacao = useLocation()

    return(
        <Link className={`
            ${'menu-navegacao__link'}
            ${localizacao.pathname === to ? 'menu-navegacao__link-sublinhado' : ''}
            `} to={to}>
                {children}
        </Link>
    )

}

export default MenuLink
