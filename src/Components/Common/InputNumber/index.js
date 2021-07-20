import React, {useState} from 'react';
import './index.scss';
import Svg from '../../Svg/Svg'
import DownArrow from '../../Svg/Images/DownArrow'
import UpArrow from '../../Svg/Images/UpArrow'

const Index = ({initialNumber = 1, onChange}) => {

    const [number, setNumber] = useState(initialNumber)
const onChangeInput=(e)=> {
        console.log(e)
}
    const onIncrement = () => {
        setNumber(number + 1)

    }
    const onDecrement = (e) => {
        e.preventDefault()
        if (number > 1) {
            setNumber(number - 1)

        }
    }
    return (
        <div className={'InputNumber'}>
            <div className={'InputUp InputNumberButton'} onClick={onIncrement}><Svg
                path={<UpArrow/>}

            /></div>
            <input value={number} onChange={onChangeInput} name={'input-number'}/>

            <div className={'InputDown InputNumberButton'} onClick={onDecrement}><Svg
                path={<DownArrow/>}
            /></div>
        </div>
    );
};

export default Index;