import '../styles/App.css'
import instagram from '../assets/icons/icons8-instagram.svg'
import facebook from '../assets/icons/icons8-facebook.svg'
import tiktok from '../assets/icons/icons8-tik-tok.svg'

function Footer() {
    return (
        <>
            <div className="footer">
                <div className="socials-container">
                    <img className='social' src={instagram} alt="Logo Instagram" />
                    <img className='social' src={facebook} alt="Logo Instagram" />
                    <img className='social' src={tiktok} alt="Logo Instagram" />
                </div>

            </div>
        </>
    )
}

export default Footer