import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Checkout from './components/checkout/Checkout'
import Cart from './components/Cart/Cart'
import Contacto from './components/Contacto/Contacto'
import { CartProvider } from './context/CartContext'
import Footer from './components/Footer/Footer'

function App() {
  
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar title={<img src="../logos/logo.png" alt="logo" style={{width:"50px"}}/>}/>
        <Routes>
          <Route path="/" element= {<ItemListContainer />}/>
          <Route path="/category/:categoryId" element= {<ItemListContainer />}/>
          <Route path="/detail/:productId" element= {<ItemDetailContainer />}/>
          <Route path="/cart" element= {<Cart />}/>
          <Route path="/checkout" element= {<Checkout />}/>
          <Route path="/contacto" element= {<Contacto />}/>
          <Route path="*" element= {<h1>404 :( Not found </h1>}/>
        </Routes>
        <Footer/>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App
