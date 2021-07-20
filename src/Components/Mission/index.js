import React from 'react';
import SubMission from "../SubMission";
import "./index.scss"
const Mission = ({title}) => {
    return (
        <div className="mission">
            <div className="mission__wrapper">
                <h2 className="mission__title">{title}</h2>
            <SubMission btnFunc={()=>console.log(123)}/>
            </div>
        </div>
    );
};

export default Mission;
