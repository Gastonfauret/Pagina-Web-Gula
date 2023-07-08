import Header from "./Header";
import '../styles/Contacto.css'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Footer from "./Footer";

function Contacto() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_0oqpl9q', 'template_hgh0bip', form.current, 'wmg6iKEykEZkRisN2')
            .then((result) => {
                console.log(result.text);
                alert("El mensaje Fue Enviado Exitosamente");
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });

    };
    return (
        <>
            <Header />
            <div className="form-container">
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <label className="text-type">Nombre Completo</label>
                    <input type="text" name="fullName" />
                    <label className="text-type">Correo Electronico</label>
                    <input type="email" name="email" />
                    <label className="text-type">Mensaje</label>
                    <textarea name="mensaje" id="mensaje" cols="21" rows="10" required></textarea>
                    <button className="btn-contacto" type="submit" value="Send">Enviar</button>
                </form>
            </div>
            <Footer/>
        </>
    )
}

export default Contacto