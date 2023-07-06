import Header from "./Header";
import '../styles/Nosotros.css'
import logoRojo from '../assets/Logo Gula Rojo.png';
import Footer from '../components/Footer'

function Nosotros() {
    return (
        <>
            <Header />
            <div className="aboutus-container">
                <h1 className="branch">Marca</h1>
                <p className="branch-text">
                    La marca fue creada por una grupo de amigos un sabado a la noche, <br />
                    entre trucos, cervezas, gin tonic sabor uva y ante la necesidad de comer algo <br />
                    sin moverse de la comodidad de la casa de turno. Ante la falta un lugar donde <br />
                    centrara el plato elegido por cada integrante y la numerosa paginas de distintas <br />
                    redes sociales que se debian seguir para poder tener variantes de los platos a <br />
                    elegir. Es por eso que a estos estudiantes de programacion se les ocurrio la idea<br />
                    de centrar todos los locales de comida, bebidas, quioscos y farmacias en una <br />
                    aplicacion movil al alcance de la mano.</p>
                <p className="branch-text">
                    Y aquella noche de invierno a mediados del año 2022, lo que fue solo una juntada<br />
                    mas de de 6 amigos, fue el nacimiento de la primera aplicacion de comidas y <br />
                    productos de Benito Juárez. Un año despues esa idea se materializo en mas de <br />
                    15 opciones distintas para pedir distintos platos, productos varios y <br />
                    postres al alcance de un click. Estamos incorporando, tambien, platos <br />
                    vegetarianos y veganos para que nadie tenga que llevarse la vianda a la cena.<br />
                    No te pierdas nuestras novedades descargando la app de la play store.<br />
                    Y recorda que si tenes hambre, tenes gula.
                </p>
                <img className="red-logo" src={logoRojo} alt="Logo Gula" />
                <Footer />
            </div>

        </>
    )
}

export default Nosotros