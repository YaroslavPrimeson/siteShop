import React, {useState} from 'react';
import Card from "../Card"


const Cards = ({items = [], addGoods}) => {
    return (
        <div className="cards">
            {items.map((item, index) => {
                return (
                    <Card item={item} key={index} setItem={addGoods} variant={'shop'}/>
                )
            })}
        </div>
    );
};

export default Cards;
