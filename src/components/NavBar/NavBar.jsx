import CartWidget from "../CartWidget/CartWidget"
import {Link} from "react-router-dom"

function NavBar({title}){
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary ">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Todos los productos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/figuras">Figuras 3D</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/lamparas">Lamparas</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/resinados">Resinados</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contacto">Contacto</Link>
                        </li>                        
                    </ul>                 
                </div>
                <form className="d-flex" role="search">
                        <CartWidget cartCount={3}/>
                </form>      
            </div>
        </nav>
    )
}

export default NavBar