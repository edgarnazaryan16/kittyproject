import { useDispatch, useSelector } from "react-redux";
import { imageAPI } from "../../../helpers";
import "./style.css"
import { fetchData, handleCounterDecrease, handleCounterIncrease, setCartData } from "../../../store/actions/actions";
import { useEffect } from "react";

const CartsCard = ({imgSrc, title, color, price, articul}) => {
    const dispatch = useDispatch()
    const {cartData} = useSelector((state) => state.kitty)
    useEffect(() => {
        dispatch(fetchData())
    }, [])
    const handleDecrease = () => {
        if (cartData.find((item) => item.id === articul).count > 1)
        {
            dispatch(handleCounterDecrease(articul));
        }
    }
    const handleIncrease = () => {
        dispatch(handleCounterIncrease(articul));
    }
    const handleDeleteItems = () => {
        dispatch(setCartData(cartData.filter((item) => item.id !== articul)))
    }
    return (
        <div className="Card">
            <img className="image" src={imgSrc ? (`${imageAPI}${imgSrc}`) : (`${imageAPI}img/notfound.png`)} alt="Something goes wrong"/>
            <div className="Description">
                <h3>{title}</h3>
                <p>
                    <span>Color: {color}</span>
                </p>
                <p>
                    Articul: {articul}
                </p>
                <p>
                    Price: {price}
                </p>               
            </div>
            <div className="Counter">
                <button onClick={handleDecrease}>-</button>
                {cartData.find((item) => item.id === articul).count}
                <button onClick={handleIncrease}>+</button>
            </div>
            <button onClick={handleDeleteItems}>Delete</button>
        </div>
    )
}
export default CartsCard;