import React from 'react';
import '../App.css';

let menuIcon = 'images/menuIcon.svg';
let lupaIcon = 'images/lupaIcon.svg';
let cartIcon = 'images/cartIcon.svg';
let favoriteIcon = 'images/favoriteIcon.svg';

function Topo() {
  return (
    <header>
      <div className="container">
        <div className="itemMenu">
          <img alt={'menu'} src={menuIcon} />
          <div>Menu</div>
        </div>
        <div className="itemMenu">
          <img alt={'busca'} src={lupaIcon} />
          <div>Busca</div>
        </div>

        <div className="itemMenu">
          <img alt={'meus favoritos'} src={favoriteIcon} />
          <div>Meus Favoritos</div>
        </div>
        <div className="itemMenu">
          <img alt={'carrinho'} src={cartIcon} />
          <div>Carrinho | R$0,00</div>
        </div>

      </div>
    </header>

  )
}

export default Topo;
