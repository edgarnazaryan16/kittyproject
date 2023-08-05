import { useDispatch, useSelector } from "react-redux";
import Card from "../Home/Card";
import { useEffect } from "react";
import { fetchData, setFavouritesData } from "../../store/actions/actions";
import Header from "../Header";

const Favourites = () => {
    const dispatch = useDispatch();
    const {data, favouritesData} = useSelector((state) => state.kitty)
    useEffect(() => {
        dispatch(fetchData());
    },[])
    return (
        <>
            <Header />
            <div className="CardsDiv">
                {
                    data?.map((item) => {
                        if (favouritesData.includes(item.articul)) {    
                            return (
                                <Card 
                                key = {item.articul}
                                {...item}
                                />
                                )
                        } else {
                            return (
                                <div key={item.articul}></div>
                                )
                            }
                        })
                    }
            </div>
        </>
    )
}
export default Favourites;