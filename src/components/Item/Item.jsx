import { Link } from "react-router-dom"

const Item = ({product}) => {
  return (
    <div className="card h-100" style={{width:"18rem"}}>
        <img src={product.img} alt={product.name} className="card-img-top"/>
        <div className="card-body d-flex flex-column">
          <h4 className="card-title text-center">{product.name}</h4>
          <p className="card-text text-center"> Precio: ${product.price} </p>
          <p className="card-text text-center">{product.description} </p>
          <Link to={`/detail/${product.id}`} className="btn btn-primary mt-auto" > Ver detalle </Link>
        </div>
       
      
    </div>
  )
}

export default Item

