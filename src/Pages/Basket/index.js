import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import Lines from "../../components/Lines";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import CartList from '../../components/CartList'


const Index = () => {

    return (
        <div className={'basket__wrapper'}>
            <Lines/>
            <Navigation variant={'shop'} />
            <div className={'basket__block'}>
                <CartList/>
            </div>
            <Footer/>
        </div>
    );
};

export default Index;