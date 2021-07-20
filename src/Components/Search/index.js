import React from 'react';
import {useSelector} from "react-redux";


const Index = () => {
    let items = useSelector(state => state.item.items)
    console.log(items)
    return (
        <div>

        </div>
    );
};

export default Index;