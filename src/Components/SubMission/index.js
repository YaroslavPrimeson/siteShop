import React from 'react';
import CardButton from "../Common/CardButton"
import {Col} from 'react-bootstrap'
import "./index.scss"

const SubMission = ({title, text, btnText, btnFunc, pictures, reverse}) => {
    title = "Lorem ipsum dolor sit amet."
    text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aut consequuntur culpa inventore ipsam libero magni optio quia velit vitae!"
    btnText = "Скачать прайс"
    btnFunc = () => {
        console.log(1)
    }
    pictures = [];

    return (
        <div className="submission">
            <div className="submission__wrapper">
                <div className={`submission__info ${reverse ? 'submission__second' : ""}`}>
                    <div className="submission__title--info">Recommendations</div>
                    <h4 className="submission__title">{title}</h4>
                    <p className="submission__text">{text}</p>
                    <div className="submission__btn col-sm-12" >
                        <CardButton text={btnText} colSm={"5"} onClick={btnFunc}/>
                    </div>
                </div>
                <div className={`submission__images  ${reverse ? 'submission__first' : ""}`}>
                    <div className="submission__image submission__image--1">123</div>
                    <div className="submission__image submission__image--2"></div>
                    <div className="submission__image submission__image--3"></div>
                </div>
            </div>
        </div>
    );
};

export default SubMission;
