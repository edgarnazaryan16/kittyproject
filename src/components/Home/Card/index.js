import { useDispatch, useSelector } from "react-redux";
import { imageAPI } from "../../../helpers";
import { setCartData, setFavouritesData } from "../../../store/actions/actions";
import "./style.css"

const Card = ({imgSrc, title, color, price, articul}) => {
    // const [isFavourite, setIsFavourite] = useState(false);
    const dispatch = useDispatch();
    const {favouritesData, cartData} = useSelector((state) => state.kitty)
    const handleFavClick = () => {
        if (!favouritesData.includes(articul)) {
            dispatch(setFavouritesData([...favouritesData, articul]))
        } else {
            dispatch(setFavouritesData(favouritesData.filter((item) => item !== articul )))
        }
    }
    const handleCartClick = () => {
        const articulList = cartData.map(item => item.id)
        if (!articulList.includes(articul)) {
            dispatch(setCartData([...cartData, {id: articul, count: 1}]))
        }
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
                <button className="AddToFav" onClick={handleFavClick}
                    style={{color: favouritesData.includes(articul) ? "yellow" : "white"}}>F</button>                
                <button className="AddToCart" onClick={handleCartClick}>Add to card</button>
                </div>
        </div>
    )
}
export default Card;