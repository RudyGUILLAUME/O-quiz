import logo from '../../assets/logo/logo.png';
import './Header.scss';
import Nav from './Nav/Nav';

function Header() {
  return (
    <header className="header">
      <a href="/">
        <img src={logo} alt="logo O'Quiz" className="logo" />
      </a>
      <h1>
        <a href="/">O&apos;Quiz</a>
      </h1>
      <div className="container__all">
        <Nav />
        <input className="searchbar" placeholder="Dave dev ou les deux..." />
      </div>
    </header>
  );
}
export default Header;
