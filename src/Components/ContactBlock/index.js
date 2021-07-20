import React from 'react';
import './index.scss'
import CardButton from '../Common/CardButton'
import {Form } from 'react-bootstrap'

const Index = () => {
    return (
        <div className={'ContactBlock'}>
            <div className={'LeftBlock'}>
                <div>
                    {/*/!*<p className={'FontSubHeader'}>Есть вопросы</p>*!/*/}
                    {/*<h2 className={'FontHeader'}>Напиши нам</h2>*/}
                    {/*<p className={'FontText'}>И наш менеджер свяжется с Вами</p>*/}
                    {/*<form className={'ContactForm'} onSubmit={(e) => {*/}
                    {/*    console.log(e)*/}
                    {/*}}>*/}
                    {/*    /!*<input placeholder={'Name'}></input>*!/*/}
                    {/*    /!*<input placeholder={'Email'}></input>*!/*/}
                    {/*    /!*<textarea placeholder={'Message'}></textarea>*!/*/}
                    {/*    /!*<CardButton colSm={6} text={"Отправить"}/>*!/*/}
                    {/*    /!*<button className={'FontSubHeader2'}>Отправить</button>*!/*/}
                    {/*</form>*/}
                </div>

                <div className={"ContactHeadersContainer"}>
                    <div className={"ContactHeader1 FontHeader2"}>Напишите нам</div>
                    <div className={"ContactHeader2 FontSubHeader2"}>Мы сразу свяжемся с Вами</div>
                    {/*<div className={"ContactHeader3 FontText"}>Напишите нам</div>*/}
                </div>


                <div className={"ContactInputContainer"}>
                    <Form.Control type="email" placeholder="Имя" />
                    <Form.Control type="email" placeholder="Фамилия" />
                    <Form.Control as="textarea" rows={3}  placeholder="Сообщение" />
                    <div className={"ContactInputButton"}>
                        <CardButton colSm={12} text={"Отправить"}/>
                    </div>

                </div>


            </div>
            <div className={'RightBlock'}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d20322.622499676683!2d30.443950649999998!3d50.45362005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1617105524439!5m2!1sru!2sua"
                ></iframe>
            </div>
        </div>
    );
};

export default Index;