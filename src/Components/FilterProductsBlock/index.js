import React from 'react';
import Card from "../Cards/Card";
import {Row, Col} from "react-bootstrap";
import CardButton from '../Common/CardButton'
import InputRadio from '../Common/InputRadio'
import SelectCustom from '../Common/SelectCustom'
import './index.scss'
import SelectAbs from "../SelectAbs";

const Index = () => {
    const leftCol = 3;
    const rightCol = 9;
    const colCard = 4;
    return (
        <div className={'FilterBlock'}>

            <Row>
                <Col md={leftCol}>
                    <h2 className={"FilterBlockHeader1"}>Категории</h2>
                </Col>
                <Col md={rightCol}>
                    <div className={'ButtonBlock'}>
                        <CardButton text={"Кофе"}/>
                        <CardButton text={"Инструменты"}/>
                        <CardButton text={"Кофемашины"}/>
                        <CardButton text={"Декор"}/>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col md={leftCol} className={"LeftBlock"}>
                    <h5 className={'FormHeader'}>Кофе свежей обжарки</h5>
                    <form>
                        <InputRadio
                            name={'category'}
                            data={[
                                {id: '1', value: "Купаж"},
                                {id: '2', value: "Премиум Кофе"},
                                {id: '3', value: "Speciality Кофе"},
                                {id: '4', value: "Под фильтр"},
                                {id: '5', value: "Для кофемашин"},
                                {id: '6', value: "Светлая обжарка"},
                                {id: '7', value: "Темная обжарка"},
                                {id: '8', value: "Arabica mix"}
                            ]}
                        />
                    </form>
                    <div className={"FilterLeftBlockBottomSort"}>
                        <h5 className={'FormHeader'}>Сортировка</h5>
                        {/*<SelectCustom data={[*/}
                        {/*    {id: '1', value: 'Сортировать от А до Я'},*/}
                        {/*    {id: '2', value: 'Сортировать от Я до А'},*/}
                        {/*    {id: '3', value: 'Сортировать по цене'}*/}
                        {/*]}*/}
                        {/*/>*/}
                        <SelectAbs data={[
                            {id: '1', value: 'Сортировать от А до Я'},
                            {id: '2', value: 'Сортировать от Я до А'},
                            {id: '3', value: 'Сортировать по цене'}
                        ]} />
                    </div>

                </Col>
                <Col md={rightCol} className={"RightBlock"}>
                    <Row className={"CardsList"}>
                        <Card colMd={colCard}/>
                        <Card colMd={colCard}/>
                        <Card colMd={colCard}/>
                    </Row>
                </Col>
            </Row>
            {/*<div className={"LeftBlock"}>*/}
            {/*    */}
            {/*</div>*/}
            {/*<div className={'RightBlock'}>*/}
            {/*</div>*/}
        </div>
    );
};

export default Index;