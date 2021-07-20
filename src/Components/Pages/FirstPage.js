// import '../../Landing/Landinn.scss'
import Svg from '../../Components/Svg/Svg'
import CoffeePlant from "../../Components/Svg/Images/CoffeePlant";
const App = () => (
    <div className={"FirstContainer"}>
        <Svg
            className={'PositionMobileSimplePageSvg'}
            viewBox={'-0 -0 113.76 210.48'}
            path={<CoffeePlant/>}
        />
        <div className={"FirstContainerTextContainer"}>
            <div className={"FirstContainerText1 BigText"}>BARISTA .KIEV</div>
            <div className={"FirstContainerText2 BigText"}>COFFEE </div>
            <div className={"FirstContainerText3 BigText"}>CENTER</div>
            <div className={"FirstContainerText4 SmallText"}>Кофе №1 в Украине</div>
            <div className={"FirstContainerTextLine"}></div>
        </div>
        <div className={"FirstContainerTextContainer2"}>
            <div className={"FirstContainerText5 BigText2"}>КРАФТОВЫЙ</div>
            <div className={"FirstContainerText6 BigText2"}>ПРОИЗВОДИТЕЛЬ</div>
            <div className={"FirstContainerText7 BigText2"}>КОФЕ</div>
        </div>

    </div>
);
export default App