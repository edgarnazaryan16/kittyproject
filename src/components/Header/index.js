import { Link } from "react-router-dom";
import { headerData } from "./data";
import "./style.css"
const Header = () => {
    return (
        <div className="Content">
            {
                headerData.map(({path, title}) => {
                    return (
                            <Link key={title} to={path}>{title}</Link>
                    )
                })
            }
        </div>
    )
}
export default Header;