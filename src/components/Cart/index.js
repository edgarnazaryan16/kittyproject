import { useSelector } from "react-redux";
import Header from "../Header";
import CartsCard from "./CartsCard/CartsCard";
import "./style.css"
import { totalCounter } from "../../helpers";
const Cart = () => {
    const {data, cartData} = useSelector((state) => state.kitty);
    const articulList = cartData.map(item => item.id)
    const tempArray = data.filter(({articul}) => {
        if(articulList.includes(articul)) {
            return ({})
        }
    }).map(({price, articul}) => {return (
        {
            price,
            count: cartData.find(({id}) => id === articul).count
        }
    )})
    return (
        <>
            <Header />
            <div className="Total">
                <h3>Total: {totalCounter(tempArray)}</h3>
            </div>
            <div className="Cart">
                {
                    data?.map((item) => {
                    if (articulList.includes(item.articul)) {
                        return (
                            <CartsCard
                                key={item.articul}
                                {...item}
                            />
                        )
                    } else {
                        return (<div key={item.articul}></div>)
                    }
                })
                }
            </div>
        </>
    )
}
export default Cart;