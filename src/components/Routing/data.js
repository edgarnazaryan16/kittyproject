import Cart from "../Cart"
import Favourites from "../Favourites"
import Home from "../Home"

export const routes = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/cart",
        element: <Cart />
    },
    {
        path: "/favourites",
        element: <Favourites />
    },
    {
        path: "*",
        element: <h1>No Found</h1>
    },
]