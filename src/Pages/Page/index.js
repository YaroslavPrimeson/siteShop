import React, {useEffect, useRef, useState} from 'react';
import Navigation from "../../components/Navigation";
import Top from "../../components/Top";
import Middle from "../../components/Middle";
import Description from "../../components/Description";
import VideoPlayer from "../../components/Video";
import AddBasketComponent from '../../components/AddBasketComponent'
import Mission from "../../components/Mission";
import Rekl from "../../components/Rekl";
import GalleryNew from "../../components/GalleryNew";
import ContactBlock from "../../components/ContactBlock";
import Footer from "../../components/Footer";
import CallBtn from "../../components/CallBtn";
import Lines from '../../components/Lines'
import CartList from "../../components/CartList";

import Slider from '../../components/Slider'
import {saveCart} from "../../store/Cart/actions";
import Preloader from "../../components/Preloader/Preloader";

const Page = ({show, setShow}) => {
    const [coord, setCoord] = useState(0)






    useEffect(() => {
        window.addEventListener('scroll', () => {
            setCoord(window.pageYOffset)
        })
        return window.removeEventListener('scroll', () => setCoord(window.pageYOffset + 80))
    }, [])

    return (
        <div className="page">

            <>
                <Preloader show={show} setShow={setShow}/>
                <Lines/>

                <Navigation variant={'main'} />
                <Top/>
                <Middle/>
                <Description/>
                <VideoPlayer/>
                <Slider />
                <Mission/>
                <Rekl padding/>
                <GalleryNew/>
                <ContactBlock/>
                <Footer/>
                <CallBtn/>
                {coord > 300 &&
                <div className="arrow__up">
                    <a href="#main">
                        <div className="arrow__up__icon"></div>
                    </a>
                </div>
                }
            </>


        </div>
    )
}

export default Page;
