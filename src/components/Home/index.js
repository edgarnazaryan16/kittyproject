import { useDispatch, useSelector } from "react-redux";
import Header from "../Header"
import { useEffect } from "react";
import { fetchData, setIsLoading } from "../../store/actions/actions";
import Card from "./Card";
import "./style.css"
const Home = () => {
    const dispatch = useDispatch();
    const {isLoading, data} = useSelector((state) => state.kitty);
    
    useEffect(() => {
        dispatch(setIsLoading(true));
        dispatch(fetchData());
    }, [])
    if (isLoading) {
        return <div>loading....</div>
    }
    return (
        <>
            <Header />
            <div className="CardsDiv">
                {
                    data?.map((item) => {
                        return (
                            <Card
                                key = {item.articul}
                                {...item}
                            />
                        )
                    })
                }
            </div>
        </>
    )
}
export default Home;