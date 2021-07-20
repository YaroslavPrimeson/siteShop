import React from 'react';
import './index.scss'
import CoffeeHolder from "../Svg/Images/CoffeeHolder";
import Svg from "../Svg/Svg";


const Index = () => {
    return (
        <div className={"PreloaderContainer"}>

            {/*<div >*/}
                <Svg
                    className={'PositionCoffeeHolderSvg'}
                    viewBox={'-20 -20 500.97 500.97'}
                    path={<CoffeeHolder/>}
                />
            {/*</div>*/}

        </div>
    );
};

export default Index;