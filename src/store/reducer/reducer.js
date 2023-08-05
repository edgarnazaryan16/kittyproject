const initialValue = {
    isLoading: false,
    data: [],
    favouritesData: (localStorage.getItem("FavouritesArray")) ? JSON.parse(localStorage.getItem("FavouritesArray")) : [],
    cartData: (localStorage.getItem("CartArray")) ? JSON.parse(localStorage.getItem("CartArray")) : [],
};

export const kittyReducer = (state = initialValue, action) => {
    if (action.type === "SET_DATA") {
        return {
            ...state,
            data: action.payload
        };
    }        
    if (action.type === "SET_IS_LOADING") {
        return {
            ...state,
            isLoading: action.payload
        };
    }
    if (action.type === "SET_FAVOURITES_DATA") {
        localStorage.setItem("FavouritesArray", JSON.stringify(action.payload));
        return {
            ...state,
            favouritesData: action.payload
        };
    }
    if (action.type === "SET_CART_DATA") {
        localStorage.setItem("CartArray", JSON.stringify(action.payload));
        return {
            ...state,
            cartData: action.payload
        };
    }
    if (action.type === "INCREASE_COUNT") {
        localStorage.setItem("CartArray", JSON.stringify(state.cartData.map((item) => (item.id === action.payload ? {...item, count: item.count + 1} : item))));
        console.log(state.cartData)
        return {
            ...state,
            cartData: state.cartData.map((item) => (item.id === action.payload ? {...item, count: item.count + 1} : item))
        };
    }
    if (action.type === "DECREASE_COUNT") {
        localStorage.setItem("CartArray", JSON.stringify(state.cartData.map((item) => (item.id === action.payload ? {...item, count: item.count - 1} : item))));
        console.log(state.cartData)
        return {
            ...state,
            cartData: state.cartData.map((item) => (item.id === action.payload ? {...item, count: item.count - 1} : item))
        };
    }
    return state;
} 