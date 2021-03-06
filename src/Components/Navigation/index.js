import React, {useEffect, useState} from 'react';
import Logo from "../../Images/main-logo-gold.png"
import {useDispatch, useSelector} from "react-redux";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch, faArrowCircleRight} from '@fortawesome/free-solid-svg-icons'
import {saveCart, showCart} from "../../store/Cart/actions";
import {Link} from "react-router-dom";
import Cards from "../Cards";


const Navigation = ({variant, addGoods}) => {
    const [hide, setHide] = useState("navigation__hide");
    const [openContacts, setOpenContacts] = useState(false)
    const [showSearch, setShowSearch] = useState(false)
    const [searchContent, setSearchContent] = useState([])
    const dispatch = useDispatch()
    const [basketLS, setBasketLS] = useState([])
    useEffect(() => {
        let basketLS = localStorage.getItem('shopBasket')
        let parsedLS = basketLS ? JSON.parse(basketLS) : []
        setBasketLS([...parsedLS])
        dispatch(saveCart([...parsedLS]))
    }, [])

    const hideHandler = () => {
        setHide(hide === "navigation__hide" ? "" : "navigation__hide");
    }
    const cart = useSelector(state => state?.cart.cart)
    const item = useSelector(state => state?.item.items)


    const searchChangeHandler = (e) => {
        const filtered = item.filter(el => el.title.toLowerCase().includes(e.target.value.toLowerCase()))
        setSearchContent(filtered)
    }


    useEffect(
        () => {
            setSearchContent(item)
        },
        [item]
    )

    return (
        <div className="navigation__wrapper">
            <div className="navigation">
                <div className="navigation__logo">
                    <a href="#main">
                        <img src={Logo} alt="logo"/>
                    </a>
                </div>
                <div className="navigation__menu">
                    <div className="navigation__icon navigation-icon">
                        <div className="navigation-icon__lines" onClick={hideHandler}>
                            <div className="navigation-icon__line"></div>
                            <div className="navigation-icon__line navigation-icon__line_middle-margin"></div>
                            <div className="navigation-icon__line"></div>
                        </div>
                    </div>
                    <ul className={`navigation__items ${hide}`}>
                        <li className="navigation__item" onClick={() => setHide("navigation__hide")}>
                            {variant === 'main' ?
                                <a href={`#main`}>??????????????</a>
                                :
                                <Link to="/#main">??????????????</Link>
                            }

                        </li>
                        <li className="navigation__item" onClick={() => setHide("navigation__hide")}>
                            {variant === 'main' ?
                                <a href={"#about"}>?? ??????</a>
                                :
                                <Link to="/#about">?? ??????</Link>
                            }
                        </li>
                        {variant === 'main' &&
                        <li className="navigation__item" onClick={() => setHide("navigation__hide")}>
                            <Link to="/shop">??????????????</Link>
                        </li>}
                        <li className="navigation__item" onClick={() => setHide("navigation__hide")}>
                            {variant === 'main' ?
                                <a href={"#help"}>????????????????</a>
                                :
                                <Link to="/#help">????????????????</Link>
                            }
                        </li>
                        <li className="navigation__item" onClick={() => setHide("navigation__hide")}>
                            {variant === 'main' ?
                                <a href={"#courier"}>???????????????? ?? ????????????</a>
                                :
                                <Link to="/#courier">???????????????? ?? ????????????</Link>
                            }
                        </li>
                        <li className="navigation__item" onClick={() => setHide("navigation__hide")}>
                            {variant === 'main' ?
                                <a href={"#contacts"}>????????????????</a>
                                :
                                <Link to="/#contacts">????????????????</Link>
                            }
                        </li>
                        <li className="navigation__item__services">

                            <div
                                className={"navigation__search__icon"}
                                onClick={(e) => {
                                    if (!e.target.classList.contains("navigation__item--input")) {
                                        setShowSearch(!showSearch)
                                    }
                                }
                                }>
                            </div>

                            <Link to={'/basket'}>
                                <div className="navigation__services">
                                    <div className="navigation__cart">
                                        <div className="navigation__cart--val">{basketLS.length}</div>
                                    </div>
                                </div>
                            </Link>
                            {showSearch &&
                            <div className={"navigation__search__modal"}>
                                <div className={'navigation__search__modal__block'}>
                                    <div className={"navigation__search__modal__input__block"}>
                                        <input className={"navigation__item--input"}
                                               type="text" placeholder={"??????????"}
                                               onChange={searchChangeHandler}
                                        />

                                    </div>
                                    <div className={'navigation__search__modal__cards__block'}>
                                        {searchContent.length > 0 ?
                                            <Cards items={searchContent} addGoods={addGoods}/>
                                            :
                                            <div>?????????????? ???????????? ?????? ????</div>
                                        }
                                    </div>
                                    <div className={'navigation__contacts__aside__close'}
                                         onClick={() => setShowSearch(!showSearch)}
                                    >
                                    </div>
                                </div>
                            </div>}
                        </li>
                    </ul>
                </div>

                <div className={'navigation__contacts'}>
                    <div className={'navigation__contacts__menu'} onClick={() => setOpenContacts(!openContacts)}>
                        <div className={'navigation__contacts__animation navigation__contacts__animation__first'}></div>
                        <div
                            className={'navigation__contacts__animation navigation__contacts__animation__second'}></div>
                        <div className={'navigation__contacts__animation navigation__contacts__animation__third'}></div>
                        <div
                            className={'navigation__contacts__animation navigation__contacts__animation__fourth'}></div>
                        {openContacts &&
                        <div className={'navigation__contacts__aside RollingRightToLeft'}>
                            <div className={'navigation__contacts__aside__block'}>
                                <div className={'navigation__contacts__aside__close'}
                                     onClick={() => setOpenContacts(!openContacts)}>
                                </div>
                                <img src={Logo} alt="logo"/>
                                <div className={'navigation__contacts__aside__text_block'}>
                                    <div className={'navigation__contacts__aside__title'}>???????? ???????????? ??????????????</div>
                                    <div className={'navigation__contacts__aside__address'}>??????????????, ??. ????????, ????.
                                        ????????????????????, 9
                                    </div>
                                    <div className={'navigation__contacts__aside__phone'}>0800 000 000</div>
                                    <div>Facebook</div>
                                    <div>Instagram</div>
                                </div>
                            </div>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navigation;