import React, {useState, useEffect, useRef} from 'react';
import './index.scss'

const Index = ({data, selectDefault, cls}) => {
    const dropdownRef = useRef(null);
    const [isExpand, setIsExpand] = useState(false)
    const [valueId, setValueId] = useState('');
    const [chosen, setChosen] = useState(selectDefault || '')
    const [chosenWithColor, setChosenWithColor] = useState([]);
    const [filteredData, setFilteredData] = useState([])

    const onClickList = () => {
        setIsExpand(!isExpand)
    }
    useEffect(() => {
        chosen &&
        setChosenWithColor(
            data?.find(({value}) => chosen === value)?.color
        );
    }, [chosen]);

    useEffect(() => {
        if (!selectDefault && !chosen) {

            setChosen(data[0]?.value);
            setValueId(data[0]?.id);
        }
    }, [chosen]);
    useEffect(() => {
        const listener = (e) => {
            if (!dropdownRef?.current || dropdownRef?.current?.contains(e.target)) {
                return;
            }

            setIsExpand(false);
        };

        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);

        return () => {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
        };
    }, [dropdownRef]);

    const onOptionClicked = (optionName, optionValue) => {

        setChosen(optionName);
        setValueId(optionValue);
        setIsExpand(false);
    };
    useEffect(() => {
        setFilteredData(data.filter(({id, value}) => id !== valueId))

    }, [valueId])
    return (
        <ul onClick={onClickList} ref={dropdownRef} className={isExpand ? `SelectWrapper ${cls} ActiveSelect` : `SelectWrapper ${cls}` }>
            {!chosen ? <li className={'FirstItem'} key={data[0].id}>{data[0].value}</li> :
                <li className={'FirstItem'} key={valueId}>{chosen}</li>}

            {isExpand && filteredData.map(({id, value}) => {
                return <li className={'SelectItem'} key={id} onClick={() => onOptionClicked(value, id)}>{value}</li>
            })}
        </ul>
    );
};

export default Index;