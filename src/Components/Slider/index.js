import React, {useState} from "react";
import {useSelector} from "react-redux";
import Card from "../Card";
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {
    Autoplay, Pagination, Navigation
} from 'swiper/core';
import {useInView} from "react-intersection-observer";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import Media from 'react-media'


// import Swiper core and required modules
import HeaderBlock from "../HeaderBlock";
import Svg from "../Svg/Svg";
import Roster from "../Svg/Roster";
import CoffeeCap from "../Svg/CoffeeCap";
import ModalCard from "../ModalCard";

SwiperCore.use([Pagination, Navigation, Autoplay]);


export default function App() {
    const [modalItem, setModalItem] = useState(null);
    const [showCard, setShowCard] = useState(false);
    let items = useSelector(state => state.item.items)

    const [ref, inView] = useInView({

        rootMargin: '-300px 0px',
    });
    const handleCardClick = (item) => {
        console.log(item)
        setModalItem(item)
        // setShowCard(true)
    }
    return (
        <div className={'slider__wrapper'}

             ref={ref}
             data-inview={inView}
        >

            <HeaderBlock title={'Магазин'} subtitle={'в нашем магазине представлен кофе Premium и Speciality класса'}/>
            <Media queries={{
                small: "(max-width: 767px)",
                medium: "(min-width: 768px) and (max-width: 1023px)",
                large: "(min-width: 1024px)"
            }}>
                {matches => (
                    <>
                        {((matches.medium || matches.small) || inView) &&
                        <div className="description__body">


                            {
                                (matches.large || matches.medium) &&
                                <>
                                    <Svg
                                        className={'Roster'}
                                        viewBox={'-0 -0 20 27'}
                                        path={<Roster/>}
                                    />
                                    <Svg
                                        className={'CoffeeCap'}
                                        viewBox={'-0 -0 25 35'}
                                        path={<CoffeeCap/>}
                                    />
                                    {showCard && <ModalCard item={modalItem} openClose={setShowCard}/>}
                                    <Swiper
                                        slidesPerView={3}
                                        spaceBetween={30}
                                        slidesPerGroup={1}
                                        loop={true}
                                        loopFillGroupWithBlank={true}
                                        navigation={true}
                                        className="mySwiper"

                                    >

                                        {items.map(el => {
                                                return (
                                                    <SwiperSlide>
                                                        <Card
                                                            item={el}
                                                            variant={'slider'}
                                                            setItem={handleCardClick}

                                                        />
                                                    </SwiperSlide>
                                                )
                                            }
                                        )}
                                    </Swiper></>}
                            {
                                (matches.small) && <div className={'slider__cards__mobile'}>
                                    {items.map(el => <Card item={el} variant={'slider'}/>)}
                                </div>}
                        </div>
                        }
                    </>
                )}

            </Media>
        </div>
    )
}