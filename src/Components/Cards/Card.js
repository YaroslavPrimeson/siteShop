import {Row, Col} from 'react-bootstrap'
import './index.scss'
import coffeecard from '../../Images/coffeecard.png'
import CardButton from '../Common/CardButton'


const App = (props) => (
    <Col md={props.colMd} className={"CardCol"}>
        <div className={"CardContainer"}>
            <Row className={"CardImageRow"}>
                <img src={coffeecard} alt="coffeecard" className={"CardImage"}/>
            </Row>
            <Row className={"CardRowInner"}>
                <div className={"CardName"}>Бразилия Сантос</div>
            </Row>
            <Row className={"CardRowInner"}>
                <div className={"CardPrice"}>76$</div>
            </Row>
            <Row className={"CardRowInner CardBuyBtn"}>
                <CardButton colSm={12} text={"Купить"}/>
                {/*<CardButton colSm={12} text={"Детальнее"}/>*/}
            </Row>
        </div>
    </Col>
);
export default App