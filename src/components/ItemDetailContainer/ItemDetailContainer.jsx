import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../services/firebase"

function ItemDetailContainer() {
  const [product, setProduct] = useState({})
  const {productId} = useParams()

  useEffect(()=>{
    getDoc(doc(db, 'products', productId))
      .then((QuerySnapshot)=>{
        const prod = {id: QuerySnapshot.id, ...QuerySnapshot.data()}
        setProduct (prod)
      })
      .catch((err)=>{
        console.log(err)
      })

  }, [productId] )

  return (
    <div className="container my-4 text-center">
        <ItemDetail {...product} />   
    </div>
  );
}

export default ItemDetailContainer