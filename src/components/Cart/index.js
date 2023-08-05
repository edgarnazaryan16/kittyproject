import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../store/actions/actions";
import Header from "../Header";
import CartsCard from "./CartsCard/CartsCard";
import "./style.css"
const Cart = () => {
    const dispatch = useDispatch();
    const {data, cartData} = useSelector((state) => state.kitty);
    useEffect(() => {
        dispatch(fetchData());
    }, [])
    const articulList = cartData.map(item => item.id)
    return (
        <>
            <Header />
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