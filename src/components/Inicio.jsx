import Header from "./Header";
//import '../styles/Home-Page.css'
import Footer from "./Footer";
import promoArg from '../assets/Promo Arg.jpg'
import promoDulzura from '../assets/Promo Dulzura.jpg'
import promoDelivery from '../assets/Promo Delivery.jpg'

function Inicio() {
    return (
        <>
            <Header />
            <div className="first">
                <img className="promo" src={promoArg} alt="Promo Argentina" />
            </div>
            <div className="flyers-container">
                <div className="flyers another-flyers">
                    <img className="promo" src={promoDulzura} alt="Logo Dia de la Dulzura" />
                </div>
                <div className="flyers another-flyers">
                    <img className="promo" src={promoDelivery} alt="Promo Delivery" />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Inicio