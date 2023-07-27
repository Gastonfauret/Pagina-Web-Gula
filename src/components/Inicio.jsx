import Header from "./Header";
import "../styles/Inicio.css";
import Footer from "./Footer";
import promoArg from "../assets/Promo Arg.jpg";
import promoDulzura from "../assets/Promo Dulzura.jpg";
import promoDelivery from "../assets/Promo Delivery.jpg";

function Inicio() {
  return (
    <>
      <Header />
      <main className="main-menu__container">
        <div className="first">
          <img className="promo" src={promoArg} alt="Promo Argentina" />
        </div>
        <div className="flyers-container">
          <div className="flyers another-flyers">
            <img
              className="promo"
              src={promoDulzura}
              alt="Logo Dia de la Dulzura"
            />
          </div>
          <div className="flyers another-flyers">
            <img className="promo" src={promoDelivery} alt="Promo Delivery" />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Inicio;
