import React, {useCallback, useEffect, useState} from 'react';
import Category from "../../components/CategoryMenu";
import Cards from "../../components/Cards"
import Lines from "../../components/Lines"
import Radio from "../../components/Radio";
import {useDispatch, useSelector} from "react-redux";
import Dropdown from "../../components/DropMenu";
import HeaderBlock from '../../components/HeaderBlock'
import Navigation from '../../components/Navigation'
import {saveCart} from "../../store/Cart/actions";
import AddBasketComponent from "../../components/AddBasketComponent";
// import Svg from '../../components/Svg/Svg'
// import Roster from "../../components/Svg/Roster";
// import CoffeeCap from '../../components/Svg/CoffeeCap'
// import Media from 'react-media'
// import Button from '../../components/Button';

const Shop = () => {
    const [subType, setSubType] = useState("");
    const [type, setType] = useState(1);
    const [filteredItems, setFilteredItems] = useState({
        items: [],
        currentPage: 1,
        itemsPerPage: 6
    });
    const [grind, setGrind] = useState('');
    const [sortBy, setSortBy] = useState('');
    const [currentItems, setCurrentItems] = useState([])
    const [paginationNumbers, setPaginationNumbers] = useState([])
    let items = useSelector(state => state.item.items)
    const [addGoods, setAddGoods] = useState(null)

    const showCartItem = useSelector(state => state?.cart.cart)

    const dispatch = useDispatch()
    const dataCoffee = {
        title: "Кофе свежей обжарки",
        list: ["Купаж", "Премиум кофе", "Speciality кофе", "Под фильтр", "Для кофемашин", "Светлая обжарка", "Темная обжарка", "Arabica mix", "Кофе в капсулах",
            "Кофе в дрипах"]
    }
    const dataTools = {
        title: "Инструменты",
        list: ["Все для Кофемашины", "Все для Альтернатив", "Матча и Аксессуары"]
    }
    const dataMachine = {
        title: "Типы оборудования",
        list: ["кофемашины", "Кофемолки", "Ринзеры", "Фильтры для воды", "Соковыжималки", "Б/У оборудование"]
    }
    const dataDecor = {
        title: "Декор",
        list: ["красивости", "прочие красивости"]
    }

//sorting items
    useEffect(() => {
        items = items.filter(item => {
            return item?.type === type;
        })
        if (grind) {
            items = items?.filter(item => {
                return item?.grind === grind
            })
            setFilteredItems(prevState => {
                return {
                    ...prevState, items
                }
            })

        }
        if (sortBy) {
            if (sortBy === 'от дешевых к дорогим') {
                items = items?.sort((a, b) => a?.price - b?.price)
            }
            if (sortBy === 'от дорогих к дешевым') {
                items = items?.sort((a, b) => b?.price - a?.price)
            }
            if (sortBy === 'по рейтингу') {
                items = items?.sort((a, b) => b?.rate - a?.rate)
            }
            setFilteredItems(prevState => {
                return {
                    ...prevState, items: items
                }
            })
        }
        if (!subType) {
            setFilteredItems(prevState => {
                return {
                    ...prevState, items: items
                }
            })
        } else {
            setFilteredItems(prevState => {
                return {
                    ...prevState, items: items.filter(item => {
                        return item?.subType === subType;
                    })
                }
            })
        }
    }, [subType, type, grind, sortBy])

//pagination useEffect
    useEffect(() => {
        const {items, currentPage, itemsPerPage} = filteredItems;

        const indexOfLastTodo = currentPage * itemsPerPage;
        const indexOfFirstTodo = indexOfLastTodo - itemsPerPage;
        setCurrentItems(items.slice(indexOfFirstTodo, indexOfLastTodo));
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(items.length / itemsPerPage); i++) {
            pageNumbers.push(i);
        }
        setPaginationNumbers(pageNumbers)

        if (filteredItems.length < filteredItems.itemsPerPage) {
            setFilteredItems(prevState => {
                return {...prevState, currentPage: 1}
            })
        }
    }, [filteredItems])
//pagination click
    const handleClick = (event) => {
        setFilteredItems(prevState => {
            return {
                ...prevState,
                currentPage: Number(event.target.id)
            }
        })

    }

    const handleAddGood = (item, e) => {
        e.stopPropagation()

        const existProduct = showCartItem.find(el => el.idPost === item.idPost)
        if (existProduct) {
            console.log(existProduct)
            const filteredCart=showCartItem.filter(el=> el.idPost!==existProduct.idPost)
            let goods = [...filteredCart, {...existProduct, 'quantity': existProduct.quantity + 1}]
            localStorage.setItem('shopBasket', JSON.stringify(goods))
            setAddGoods(item)
            dispatch(saveCart([ ...goods]))
        } else {
            let goods = [...showCartItem, {...item, 'quantity': 1}]
            localStorage.setItem('shopBasket', JSON.stringify(goods))
            setAddGoods(item)
            dispatch(saveCart([ ...goods]))
        }
        setTimeout(
            () => setAddGoods(
                null
            ), 2000)
    }

    return (
        <>
            <Lines/>
            <Navigation variant={'shop'} addGoods={handleAddGood}/>
            {addGoods ? <AddBasketComponent item={addGoods}/> : <></>}

            <div className="shop__wrapper" id={"shop"}>

                {/*<Media queries={{*/}
                {/*    small: "(max-width: 767px)",*/}
                {/*    medium: "(min-width: 768px) and (max-width: 1023px)",*/}
                {/*    large: "(min-width: 1024px)"*/}
                {/*}}>*/}
                {/*    {matches => (*/}
                <div className="shop">
                    <HeaderBlock
                        title={'Наш Магазин'}
                        subtitle={'В нашем магазине представлен кофе Premium и Speciality класса, а также широкий спектр сопутствующего оборудования'}
                    />
                    {/*{!matches.small &&*/}
                    {/*<>*/}
                    {/*    <Svg*/}
                    {/*        className={'Roster'}*/}
                    {/*        viewBox={'-0 -0 20 27'}*/}
                    {/*        path={<Roster/>}*/}
                    {/*    />*/}
                    {/*    <Svg*/}
                    {/*        className={'CoffeeCap'}*/}
                    {/*        viewBox={'-0 -0 25 35'}*/}
                    {/*        path={<CoffeeCap/>}*/}
                    {/*    />*/}
                    {/*</>*/}
                    {/*}*/}


                    <Category title={"Категории"}
                              content={[{
                                  name: "Кофе",
                                  func: setType,
                                  func2: setSubType,
                                  typeId: 1
                              }, {
                                  name: "Инструменты",
                                  func: setType,
                                  func2: setSubType,
                                  typeId: 2
                              }, {
                                  name: "Оборудование",
                                  func: setType,
                                  func2: setSubType,
                                  typeId: 3
                              }, {
                                  name: "Декор",
                                  func: setType,
                                  func2: setSubType,
                                  typeId: 4
                              }
                              ]} currentType={type}/>
                    <div className="shop__items">
                        <div className="shop__categories">
                            {type === 1 &&
                            <Radio title={dataCoffee.title} list={dataCoffee.list} func={setSubType}/>}
                            {type === 2 &&
                            <Radio title={dataTools.title} list={dataTools.list} func={setSubType}/>}
                            {type === 3 &&
                            <Radio title={dataMachine.title} list={dataMachine.list} func={setSubType}/>}
                            {type === 4 &&
                            <Radio title={dataDecor.title} list={dataDecor.list} func={setSubType}/>}
                            {type === 1 &&
                            <Dropdown title="Помол:" data={[
                                {id: 0, value: 'Все'},
                                {id: '1', value: 'Зерно'},
                                {id: '2', value: 'Под чашку'},
                                {id: '3', value: 'Под гейзер'},
                                {id: '4', value: 'Под Кемекс'},
                                {id: '5', value: 'Под Пуровер'},
                                {id: '6', value: 'Под Гейрез'},
                                {id: '7', value: 'Под Эспрессо'},
                                {id: '8', value: 'Под Турку'}
                            ]} classname="shop__dropdown" onSelect={setGrind}/>
                            }
                            <Dropdown title="Фильтр:"
                                      data={
                                          [
                                              {id: 1, value: "по рейтингу"},
                                              {id: 2, value: "от дешевых к дорогим"},
                                              {id: 3, value: "от дорогих к дешевым"}
                                          ]
                                      }
                                      onSelect={setSortBy}
                                      classname="shop__dropdown"/>
                            <div className={'shop__pagination__block'}>
                                <div>{`Всего результатов ${filteredItems.items?.length}`}</div>

                                {filteredItems.items?.length ?
                                    <ul className={'shop__pagination'}>
                                        <li>Страницы:</li>
                                        {paginationNumbers.map((number) =>
                                            <li
                                                key={number}
                                                id={number}
                                                onClick={handleClick}
                                                className={filteredItems.currentPage == number && "shop__pagination__selected"}
                                            >
                                                {number}
                                            </li>
                                        )}
                                    </ul> : <></>
                                }
                            </div>

                        </div>
                        <Cards items={currentItems} addGoods={handleAddGood} variant={'shop'}/>

                    </div>

                </div>
                {/*    )}*/}
                {/*</Media>*/}
            </div>
        </>
    );
};

export default Shop;
