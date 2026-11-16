import React from 'react';

function GoodsCard(props) {
  return (
    <div className="goods-card">
      <img src={props.image} alt={props.title} className="goods-image" />
      <h4 className="goods-title">{props.title}</h4>
      <p className="goods-price">Ціна: {props.price} грн</p>
    </div>
  );
}

export default GoodsCard;