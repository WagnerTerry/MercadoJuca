import React from "react";
import "./Header.scss";

const Header = () => {
    return (
        <div class="header">
            <div class="navbar">
                <img src="../src/assets/icon-estrela.svg" alt="estrela" id="estrela" />
                <p>selfcare</p>
                <div class="navbarIcons">
                    <img src="../src/assets/icon-lupa.svg" alt="pesquisar" />
                    <img src="../src/assets/icon-perfil.svg" alt="perfil" />
                    <img src="../src/assets/icon-carrinho.svg" alt="carrinho" />
                </div>
            </div>
            <img src="../src/assets/banner.svg" alt="banner" id="banner" />
        </div>
    );
};
export default Header;
