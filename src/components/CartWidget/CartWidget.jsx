//import { useContext } from "react"
//import { CartContext } from "../../context/CartContext"
import { useCart } from "../../hooks/useCart";

function CartWidget() { 
  const {totalQuantity} = useCart();
 //const {totalQuantity} = useContext(CartContext);
  return (
      <>
          <button type="button" className="btn btn-secondary position-relative"  data-bs-theme="dark">
              <i className="bi bi-cart"> </i> 
              Carrito
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {totalQuantity}
                  <span className="visually-hidden">unread messages</span>
              </span>
          </button>
      </>
  )   
}
export default CartWidget


