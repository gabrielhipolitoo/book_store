import React from "react";

const Header = () => {
  return (
    <header className="header-initial">
      <strong id="band">BOOK STORE</strong>
      <div className="header-initial-links">
        <a href="">Biblioteca</a>
        <a href="">Minhas compras</a>
        <a href="">Minhas vendas</a>
        <button id="have-account">Entrar na conta</button>
      </div>{" "}
      {/* header-initial-link */}
    </header>
  );
};

export default Header;
