import logo from "../../image/header-logo.svg";

function Header() {
  return (
    <header className="header">
      <a href="#">
        <img className="header__logo" src={logo} alt="Логотип" />
      </a>
    </header>
  );
}

export default Header;
