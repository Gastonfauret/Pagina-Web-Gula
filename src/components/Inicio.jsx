import Header from "./Header";
import '../styles/Home-Page.css'
import Footer from "./Footer";

function Inicio() {
    return (
        <>
            <Header />
            <div className="first">
                <p className="flyers">Inserte flyer nro. 1 Aqui</p>
            </div>
            <div className="flyers-container">
                <div className="flyers another-flyers">
                    <p className="flyers">Inserte flyer nro. 2 Aqui</p>
                </div>
                <div className="flyers another-flyers">
                    <p className="flyers">Inserte flyer nro. 3 Aqui</p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Inicio