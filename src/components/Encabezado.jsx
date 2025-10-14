import './Encabezado.css'
import logo from '../assets/logo.svg' /* Llamando la imagen desde la carpeta assets */

function Encabezado(){
    let usuario = {
        nombre: "Thomas Cifuentes",
        correo: "correo@correo.com",
        rol: "admin",
        contraseña: "contraseñaSegura"
    }
    let iniciales = usuario.nombre.split(" ").map((letra)=> letra[0]).join("")
    console.log(iniciales)
    return(
        <header className="header-container">
            {/* <img className="header-foto" src={logo} alt="logo" /> /* Llamando la imagen desde la carpeta assets */}
            <img className="header-foto" src="logo.svg" alt="logo" /> {/* Llamando la imagen desde la carpeta public */}
            <nav className="header-menu">
                <a className="header-menu-enlace" href="">Inicio</a>
                <a className="header-menu-enlace" href="">Candidatos</a>
                <a className="header-menu-enlace" href="">Ofertas</a>
                <a className="header-menu-enlace" href="">Seguimiento</a>
            </nav>
            <span className="header-iniciales">{iniciales}</span>
            <p className="header-nombre">{usuario.nombre}</p>
            <button className="header-cerrar">Cerrar Sesión</button>
        </header>
    )
}

export default Encabezado