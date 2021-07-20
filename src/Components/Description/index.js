import React from 'react';
import Post from "../Post"
import descImage from "../../Images/descriptionImage.png"
import "./index.scss"

const Description = () => {
    const postContent1 = {
        title: "Title 1",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, autem!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, autem!"
    }
    const postContent2 = {
        title: "Title 2",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, autem!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, autem!"
    }
    const postContent3 = {
        title: "Title 3",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, autem!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, autem!"
    }
    const postContent4 = {
        title: "Title 4",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, autem!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, autem!"
    }
    const postContent5 = {
        title: "Title 5",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, autem!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, autem!"
    }

    return (
        <div className="descWrapper">
            <div className="descTitle">
                <h2>Кофе свежей обжарки</h2>
                <p className="descTitleText">почему клиенты выбирают именно Нас</p>
            </div>
            <div className="descBody">
                <div className="descTab">
                    <Post title={postContent1.title} text={postContent1.text}/>
                    <Post title={postContent2.title} text={postContent2.text}/>
                </div>
                <div className="descTab">
                    <div className="descImage"><img src={descImage} alt=""/></div>
                    <Post title={postContent3.title} text={postContent3.text}/>
                </div>
                <div className="descTab">
                    <Post title={postContent4.title} text={postContent4.text}/>
                    <Post title={postContent5.title} text={postContent5.text}/>
                </div>
            </div>

        </div>
    );
};

export default Description;
