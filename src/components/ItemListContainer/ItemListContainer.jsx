import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../services/firebase"


const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const {categoryId} = useParams()

  useEffect (() =>{
    const collectionRef = categoryId
      ? query(collection(db, "products"), where("category", "==", categoryId))
      : collection(db, "products")

      getDocs(collectionRef)
      .then((QuerySnapshot) =>{
        const productos = QuerySnapshot.docs.map((doc) =>{
          return {id: doc.id, ...doc.data()}
        })
        setProducts(productos)

      } )
      .catch((err) =>{
        console.log(err)
      } )
  }, [categoryId] )

return (
  <div className="container my-4">
        <h1 className="text-center mb-4">
            {categoryId ? `Categoria: ${categoryId}` : "Bienvenidos a Sempiterno"}
        </h1>
        <ItemList products={products} />
    </div>
)
}

export default ItemListContainer