// import '../../Landing/Landinn.scss'
import Svg from '../../Components/Svg/Svg'
import CoffeePlant2 from "../../Components/Svg/Images/CoffeePlant2"
import man from '../../Images/prihodko2.png'
// import man from '../../Images/prihodko.png'
import logo from "../../Images/logo.jpg"
import {Row, Col} from 'react-bootstrap'

const App = () => (
    <div className={"SecondContainer"}>
        <Row className={"SecondContainerRow"}>
            <Col md={5}>
                <div className={"SecondContainerTextContainer"}>
                    <div id={"SecondContainerText1"}>Напиток кофейного дерева.</div>
                    <div id={"SecondContainerText2"}>Вкус, удовольствие от которого я не мог забыть весь день…</div>
                    <div id={"SecondContainerText3"}>До – я не особо разбирался во вкусах, пил американо, капучино…., как все… Но, однажды мне посчастливилось попробовать такой вкусный кофе, впечатление от которого создало настроение на весь день. И я не мог его забыть… Так родилась идея узнать о кофе как можно больше: что влияет на вкус, какие зерна лучшие, как их обжаривать, упаковывать и готовить. Я обучился искусству бариста сам, создал школу для обучения баристов, изучил технологию производства. Теперь я знаю о кофе все и делом моей жизни стало делиться удовольствием от вкуса настоящего премиального кофе.</div>
                </div>
            </Col>
            <Col md={3}>
                <div className="CompanyLogo">
                    <img src={logo} alt=""/>
                </div>
            </Col>
            <Col md={4}>
                {/*<Svg*/}
                {/*    className={'PositionCoffePlant2Svg'}*/}
                {/*    viewBox={'0 0 877.000000 1280.000000'}*/}
                {/*    path={<CoffeePlant2/>}*/}
                {/*/>*/}
                <div className={"ManBorder"}></div>
                <div className={"ManBorder1"}></div>
                <img src={man} alt="man" className={"ManImage"}/>
            </Col>
        </Row>
    </div>
);
export default App