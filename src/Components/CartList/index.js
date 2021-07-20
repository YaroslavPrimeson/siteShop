import React from 'react';
import coffee from '../../Images/coffeecard.png'
import InputNumber from '../Common/InputNumber'
import './index.scss';

const Index = () => {

    const onChange=(e)=> {
        console.log(e)
    }
    return (
        <div className={"CartList"}>
            <div className={"CartListHeader"}>
                <h2>CART</h2>
                <div className={'Path'}></div>
            </div>
            <div className={"CartListTable"}>
                <div className={"TableHeader"}>
                    <div className={'TableHeaders'}><h3>ПРОДУКТ</h3><h3>ЦЕНА</h3><h3>КОЛИЧЕСТВО</h3><h3>ОБЩЯЯ СУМА</h3>
                    </div>
                </div>
                <div className={"TableMain"}>
                    <div className={'TableImageBlock'}>
                        <button>x</button>
                        <img className={'TableProductImage'} src={coffee}/>
                    </div>
                    <div className={'TableProductsBlock'}>
                        <p>Кофе Бразилия</p>
                        <p>100₴</p>
                        <InputNumber onChange={onChange} name={"quantity"} />
                        <p>100₴</p>
                    </div>
                </div>
            </div>
            <div className={'OrderPrice'}>
                <h3>Общая сумма заказа</h3>
                <p>100₴</p>
            </div>
            <div className={'CartListButtonBlock'}>
                <button>Подтвердить заказ</button>
            </div>
        </div>
    );
};

export default Index;