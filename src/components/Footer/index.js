import {
  FaGoogle,
  FaLinkedin,
  FaGithub,
  FaPhoneSquareAlt,
  FaWhatsappSquare,
} from 'react-icons/fa'
import HeaderContext from '../../context/HeaderContext'
import './index.css'

const Footer = () => (
  <HeaderContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const footerDarkText = isDarkTheme ? 'footer-dark-text' : ''

      return (
        <div className="footer-container">
          <div className="icons-container">
            <a
              href="mailto:urmilapamarthi@gmail.com"
              className="footer-icon-button"
            >
              <FaGoogle className={`footer-icon ${footerDarkText}`} />
            </a>
            <a
              href="tel:9876543211"
              target="__blank"
              rel="noopener noreferrer"
              type="button"
              className="footer-icon-button"
            >
              <FaPhoneSquareAlt className={`footer-icon ${footerDarkText}`} />
            </a>
            <a
              href="https://wa.me//+919876543211"
              target="__blank"
              rel="noopener noreferrer"
              type="button"
              className="footer-icon-button"
            >
              <FaWhatsappSquare className={`footer-icon ${footerDarkText}`} />
            </a>
            <a
              href="www.linkedin.com/in/urmila-pamarthi-b120a0248"
              target="__blank"
              rel="noopener noreferrer"
              className="footer-icon-button"
            >
              <FaLinkedin className={`footer-icon ${footerDarkText}`} />
            </a>
            <a
              href="https://github.com/urmila2801"
              target="__blank"
              rel="noopener noreferrer"
              className="footer-icon-button"
            >
              <FaGithub className={`footer-icon ${footerDarkText}`} />
            </a>
          </div>
          <p className={`contact-us-text ${footerDarkText}`}>Contact us</p>
        </div>
      )
    }}
  </HeaderContext.Consumer>
)

export default Footer
