import { useRoutes } from "react-router-dom"
import { routes } from "./data"

const MyRoute = () => {
    return (
        <>
            {
                useRoutes(routes)
            }
        </>
    )
}
export default MyRoute;