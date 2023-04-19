import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './pages/Login';
import Product from './pages/Product';
import About from './pages/About';
import { ProductContextProvider } from './context/ProductContext';

function App() {
  return (
    <ProductContextProvider>
    <div className="App">
      <Header />
      <Routes>

        <Route>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path='/about' element={<About/>}/>
        </Route>
        
      </Routes>
      <Footer />
    </div>
    </ProductContextProvider>
  );
}

export default App;
