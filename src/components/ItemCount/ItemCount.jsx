import { useState } from "react";

export default function ItemCount({initialValue=1, stock, onAdd}) {
    const [cantidad, setCantidad] = useState(initialValue)
   

    const decrement = () => {
        if(cantidad>1){
            setCantidad(cantidad => cantidad -1)
        }
    }

    const increment = () => {
        if (stock> cantidad) {    
            setCantidad(cantidad => cantidad + 1)
        }
    }

    return (
    <div className="text-center">
        <h3>{cantidad} </h3>
        <button onClick={decrement}>-</button>
        <button onClick={() => onAdd(cantidad) }>Agregar al carrito</button>
        <button onClick={increment}>+</button>
    </div>
  );
}

 