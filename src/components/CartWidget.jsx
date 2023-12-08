import { Link } from "react-router-dom";
import cart from "../assets/carrito-compra.png"

export const CartWidget = () => {

    return (
    <Link to="/cart">
       <img src={cart} alt="changuite" width={45}/>
   
       </Link>
    )
}