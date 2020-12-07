import React from 'react';
import './Products.css';
import Product from './Product';
import { Router, Link, History, useParams } from "react-router-dom";



let arrowLeft = 'images/arrowLeft.svg';
let arrowRight = 'images/arrowRight.svg';
let heart = 'images/heart.svg';

function Products() {
  return (
    <div className="products">
      <div className="prodCenter">
        <img className="arrowLeft" src={arrowLeft} alt="seta esquerda" />
        <div className="forProd">
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
        <img className="arrowRight" src={arrowRight} alt="seta direita" />
      </div>
      <br />
      <br />
    </div>

  )
}

export default Products;