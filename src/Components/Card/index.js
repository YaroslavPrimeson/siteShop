import React, {useEffect, useState, useCallback} from 'react';
import Button from "../Button";
import StarsRate from '../Common/StarsRate'
import {Link} from "react-router-dom";
import {saveCart} from "../../store/Cart/actions";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from 'react-router-dom';

const Card = ({item, setItem, variant}) => {

    const history = useHistory();
    const handleOnClick = () => history.push({
        pathname: '/detail',
        state: {item}
    });
    const handleClickSliderBuy = (e) => {
        e.stopPropagation()
        history.push({
            pathname: '/shop'
        })
    };
    return (
        <div className="card__wrapper">
            <div className="card" onClick={handleOnClick}>
                <div className="card__image">
                    <div className={'card__image__wrapper'}>
                        <img src={item?.picture} alt="item"/>
                    </div>
                </div>
                <div className="card__title">{item?.title}</div>
                <div className="card__ratio">
                    <StarsRate ratingProp={item?.rate}/>
                </div>
                <div className="card__price">
                    <div className="card__oldPrice">
                        {item?.oldPrice}{item?.oldPrice && "₴"}
                    </div>
                    <div className="card__newPrice">
                        <span className="card__price--digits">{item?.price}</span>
                        ₴
                    </div>
                </div>
                <div className="card__button">
                    {variant === 'shop' &&
                    <Button
                        text={item?.inStock === 0 ? "Ожидаем" : "Купить"}
                        onClick={(e) => setItem(item, e)}
                        disabled={item?.inStock === 0}
                    />}

                    {variant === 'slider' &&
                    <Button
                        text={item?.inStock === 0 ? "Ожидаем" : "Купить"}
                        disabled={item?.inStock === 0} onClick={handleClickSliderBuy}
                    />
                    }
                </div>
            </div>
        </div>
    );
};

export default Card;
