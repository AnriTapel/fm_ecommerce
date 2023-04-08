import { Header } from './components/header/Header';
import { Route, Routes } from 'react-router-dom';
import { ProductsList } from './pages/products-list/ProductsList';
import { ProductPage } from './pages/product-page/ProductPage';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<ProductsList/>}/>
        <Route path="/products" element={<ProductsList/>}></Route>
        <Route path='/product/:id' element={<ProductPage/>}></Route>
      </Routes>
    </>
  );
}

export default App;
