import { dataAPI, sleepProject } from "../../helpers"

export const setData = (payload) => {
    return {
        type: 'SET_DATA',
        payload
    }
}
export const setIsLoading = (payload) => {
    return {
        type: "SET_IS_LOADING",
        payload
    }
}
export const handleCounterIncrease = (payload) => {
    return {
        type: "INCREASE_COUNT",
        payload
    }
}
export const handleCounterDecrease = (payload) => {
    return {
        type: "DECREASE_COUNT",
        payload
    }
}
export const setFavouritesData = (payload) => {
    return {
        type: "SET_FAVOURITES_DATA",
        payload
    }
}
export const setCartData = (payload) => {
    return {
        type: "SET_CART_DATA",
        payload
    }
}
export const fetchData = () => {
    return async(dispatch) => {
        try {
            await sleepProject();
            dispatch(setIsLoading(true))
            const response = await fetch(dataAPI);
            const data = await response.json();
            dispatch(setData(data));
        } catch {
            console.log("Something goes wrong")
        } finally {
            dispatch(setIsLoading(false))
        }
    }
}