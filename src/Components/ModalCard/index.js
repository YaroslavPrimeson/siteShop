import './index.scss'
import coffee from '../../Images/coffeecard.png'
import InputNumber from '../Common/InputNumber'
import InputRadio from '../Common/InputRadio'
import OldPrice from "../OldPrice";
import SelectCustom from "../Common/SelectCustom";
import React from "react";
import SelectAbs from "../SelectAbs";

const App = (props) => {


    return (
        <div className={"CardBigContainer"}>
            <div className={'PathContainer'}>
                <h3 className={'PathContainerHeader FontHeader2'}>Магазин</h3>
            </div>
            <div className={'MainDoubleBlock'}>
                <div className={'MainLeftBlock MainBlock'}>
                    <img className={'ProductImage'} src={coffee}/>
                </div>
                <div className={'MainRightBlock MainBlock'}>
                    <h3 className={"FontHeader3"}>Бразилия Сантос</h3>
                    <p className={"FontText2"}>В наличии</p>
                    <div className={'CoffeeInStock'}>
                        <OldPrice price={"75"}/>
                        <h3>75₴</h3>&nbsp;
                        <InputRadio name={"weight"} data={[{id: '1', value: "250г"}, {id: '2', value: "500г"}, {
                            id: '3',
                            value: "1Кг"
                        }]}/>
                    </div>
                    <div className={"CoffeeGrinding"}>
                        {/*<p>Помол:</p>*/}

                        {/*<SelectCustom data={[*/}
                        {/*    {id: '1', value: 'Зерно'},*/}
                        {/*    {id: '2', value: 'под чашку'},*/}
                        {/*    {id: '3', value: 'Под гейзер'},*/}
                        {/*    {id: '4', value: 'Под Кемекс'},*/}
                        {/*    {id: '5', value: 'Под Пуровер'},*/}
                        {/*    {id: '6', value: 'Под Гейрез'},*/}
                        {/*    {id: '7', value: 'Под Эспрессо машину'},*/}
                        {/*    {id: '8', value: 'Под Турку'}*/}
                        {/*]}/>*/}
                        <SelectAbs title="Помол:" data={[
                            {id: '1', value: 'Зерно'},
                            {id: '2', value: 'под чашку'},
                            {id: '3', value: 'Под гейзер'},
                            {id: '4', value: 'Под Кемекс'},
                            {id: '5', value: 'Под Пуровер'},
                            {id: '6', value: 'Под Гейрез'},
                            {id: '7', value: 'Под Эспрессо машину'},
                            {id: '8', value: 'Под Турку'}
                        ]}/>

                        {/*<select  className={'decorated'}>*/}
                        {/*    <option>Зерно</option>*/}
                        {/*    <option>под чашку</option>*/}
                        {/*    <option>Под гейзер</option>*/}
                        {/*    <option>Под Кемекс</option>*/}
                        {/*    <option>Под Пуровер</option>*/}
                        {/*    <option>Под Гейрез </option>*/}
                        {/*    <option>Под Эспрессо машину </option>*/}
                        {/*    <option>Под Турку</option>*/}
                        {/*</select>*/}

                    </div>
                    <form className={"BuyNow"} onSubmit={(e) => {
                        e.preventDefault();
                        console.log(e)
                    }}>
                        <button type={'submit'}>Купить</button>
                        <InputNumber/>
                    </form>
                    <div className={'DescriptionBlock'}>
                        <div className={'DescriptionLine'}>
                            <h2 className={'DescriptionProperty'}>Состав: </h2>
                            <p className={'DescriptionValue'}>100% Арабика</p>
                        </div>
                        <div className={'DescriptionLine'}>
                            <h2 className={'DescriptionProperty'}>Класс зерна: </h2>
                            <p className={'DescriptionValue'}>Premium Coffee</p>
                        </div>
                        <div className={'DescriptionLine'}>
                            <h2 className={'DescriptionProperty'}>Регион: </h2>
                            <p className={'DescriptionValue'}>Бразия</p>
                        </div>
                        <div className={'DescriptionLine'}>
                            <h2 className={'DescriptionProperty'}>Форма: </h2>
                            <p className={'DescriptionValue'}>Кофе собран со всего региона в Бразилии</p>
                        </div>
                        <div className={'DescriptionLine'}>
                            <h2 className={'DescriptionProperty'}>Разновидность арабики: </h2>
                            <p className={'DescriptionValue'}>Caturra, Caturrai</p>
                        </div>
                        <div className={'DescriptionLine'}>
                            <h2 className={'DescriptionProperty'}>Высота выращивания: </h2>
                            <p className={'DescriptionValue'}>1000 - 1200 н.у.м.</p>
                        </div>
                        <div className={'DescriptionLine'}>
                            <h2 className={'DescriptionProperty'}>Обжарка: </h2>
                            <p className={'DescriptionValue'}>Венская (средняя)</p>
                        </div>
                        <div className={'DescriptionLine'}>
                            <h2 className={'DescriptionProperty'}>Сенсорика: </h2>
                            <p className={'DescriptionValue'}>Мягкий и нежный, выражены нотки молочного шоколада, ореха,
                                на послевкусии легкая кислинкого елого вина</p>
                        </div>
                        <div className={'DescriptionLine'}>
                            <h2 className={'DescriptionProperty'}>Рекомендованое приготовление: </h2>
                            <p className={'DescriptionValue'}>Кофемашина, Турка, гейзер, Чашка</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"MotivatedContainer"}>
                <p className={'MotivatedPhrase'}>Закажи сейчас и уже завтра товар будет у тебя</p>
                <div className={'BottomCardBlock'}>
                    <div className={'FinalProvisionsCard'}>
                        <h3>Оплата</h3>
                        <p>Наличными при самовывозе. Безналичный расчет (р/с для ООО, ФОП). Наложенный платеж при
                            получении товара. Оплата картой </p>
                    </div>
                    <div className={'FinalProvisionsCard'}>
                        <h3>Доставка</h3>
                        <p>Наличными при самовывозе. Безналичный расчет (р/с для ООО, ФОП). Наложенный платеж при
                            получении товара. Оплата картой </p>
                    </div>
                    <div className={'FinalProvisionsCard'}>
                        <h3>Гарантия</h3>
                        <p>Наличными при самовывозе. Безналичный расчет (р/с для ООО, ФОП). Наложенный платеж при
                            получении товара. Оплата картой </p>
                    </div>
                </div>
            </div>
        </div>
    );

};
export default App