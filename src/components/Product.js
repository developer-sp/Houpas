import React from 'react';
import './Products.css';
import { useLocation } from "react-router-dom";

let heart = 'images/heart.svg';

function useQuery (){

  return new URLSearchParams ( useLocation().search );

}



function Product() {

  let query = useQuery();
  let cat = query.get('produto');
  let url="produto";

  return (
    <div className="product">
      <div className="prodContainer">
        <div className="bgProd">
          <div class="round">
            <img src={heart} alt="favorite" />
          </div>
        </div>
        <div className="infoProd">
          <div className="descProd">
            Blusa Feminina Básica Manga Curta Marisa
          </div>

          <div className="precoProd">
            R$57,00
          </div>

          <a className="button" href={url}>Comprar</a>
                
        </div>
      </div>

    </div>
  )

}

export default Product;