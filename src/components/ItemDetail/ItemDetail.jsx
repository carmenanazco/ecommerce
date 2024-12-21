import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import { useCart } from "../../hooks/useCart"

function ItemDetail({id, name, img, description, category, price, stock}) {
    
    const {addItem, isInCart} = useCart()
    
    const handleAdd = (count) =>{
        const productToAdd = {
            id, name, price, quantity:count
        }
        addItem(productToAdd)
    }
    return (

<div className="container text-center mt-5">
    <h2>Detalle del producto</h2>
    <div className="card mx-auto" style={{maxWidth:"540px"}}>
        <img 
            src={img} 
            style={{width:300}}
            className="rounded mx-auto d-block"
            alt={name}
        />

        <div className="card-body">
            <h2>{name}</h2>
            <p>{description}</p>
            <p>Precio: $ {price}</p>
            <p>Disponible: {stock} </p>
        </div>
        {
            isInCart(id) ? (
                <Link to="/cart">Finalizar compra</Link>
            ) : (
                <ItemCount stock={stock} onAdd={handleAdd} />
        )}
        </div>
  
    </div>
);
}

        
export default ItemDetail