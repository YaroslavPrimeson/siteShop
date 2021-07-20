import React, {useEffect, useState} from 'react';
import {Modal} from 'react-bootstrap'
import Logo from "../../Images/main-logo-gold.png"
import owner from "../../Images/prihodko2.png"
import HeaderBlock from '../HeaderBlock'
import {useInView} from "react-intersection-observer";
import Media from 'react-media';
import Button from '../Button';

const Middle = () => {
    const [openModal, setOpenModal] = useState(false)

    const [ref, inView] = useInView({
        rootMargin: '-300px 0px',
    });

    return (
        <div className="middle"

             ref={ref}
             data-inview={inView}
        >
            <Media queries={{
                small: "(max-width: 767px)",
                medium: "(min-width: 768px) and (max-width: 1023px)",
                large: "(min-width: 1024px)"
            }}>
                {
                    matches => (<div className="middle__wrapper" id={"about"}>
                        <HeaderBlock title={'О нас'} subtitle={'и о нашей компании'}/>
                        {inView &&
                        <>
                            <div className="middle__text RollingLeftToRight">
                                <div className="middle__title">Напиток кофейного дерева.</div>
                                <div className="middle__description">Вкус, удовольствие от которого я не мог забыть весь
                                    день…
                                </div>
                                <div className="middle__review">До – я не особо разбирался во вкусах, пил американо,
                                    капучино...
                                    как
                                    все… Но, однажды мне посчастливилось попробовать такой вкусный кофе, впечатление от
                                    которого
                                    создало настроение на весь день. И я не мог его забыть… Так родилась идея узнать о
                                    кофе
                                    как
                                    можно больше: что влияет на вкус, какие зерна лучшие, как их обжаривать, упаковывать
                                    и
                                    готовить.
                                    Я обучился искусству бариста сам, создал школу для обучения баристов, изучил
                                    технологию
                                    производства. Теперь я знаю о кофе все и делом моей жизни стало делиться
                                    удовольствием
                                    от
                                    вкуса
                                    настоящего премиального кофе.
                                </div>
                                <Button text={"Подробнее"} onClick={() => setOpenModal(true)}/>
                            </div>

                            {matches.large && <div className="middle__logo">
                                <img src={Logo} alt="logo" className={'Zooming'}/>
                            </div>}

                            <div className="middle__pic RollingRightToLeft">
                                <img src={owner} alt="" className="middle__img"/>
                            </div>
                        </>

                        }
                        {
                            openModal &&
                            <div className={'middle__modal'}>
                                <div className={'middle__modalBlock'}>
                                    <p>До – я не особо разбирался во вкусах, пил американо,
                                        капучино...
                                        как
                                        все… Но, однажды мне посчастливилось попробовать такой вкусный кофе, впечатление
                                        от
                                        которого
                                        создало настроение на весь день. И я не мог его забыть… Так родилась идея узнать
                                        о кофе
                                        как
                                        можно больше: что влияет на вкус, какие зерна лучшие, как их обжаривать,
                                        упаковывать и
                                        готовить.
                                        Я обучился искусству бариста сам, создал школу для обучения баристов, изучил
                                        технологию
                                        производства. Теперь я знаю о кофе все и делом моей жизни стало делиться
                                        удовольствием
                                        от
                                        вкуса
                                        настоящего премиального кофе.</p>
                                    <div className={'middle__closeModal'} onClick={() => setOpenModal(false)}></div>
                                </div>
                            </div>
                        }
                    </div>)
                }
            </Media>
        </div>
    );
};

export default Middle;
