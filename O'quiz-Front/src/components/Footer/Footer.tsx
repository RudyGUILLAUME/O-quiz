import { NavLink } from 'react-router-dom';
import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <nav>
        <NavLink to="/contacts" className="footerLink">
          Contactez-nous
        </NavLink>
        <NavLink to="/mentions-legales" className="footerLink">
          Mentions légales
        </NavLink>
        <NavLink to="/qui-sommes-nous" className="footerLink">
          Qui sommes nous ?
        </NavLink>
      </nav>
    </footer>
  );
}

export default Footer;
