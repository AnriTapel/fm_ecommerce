import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from './components/header/Header';
import { ProductPage } from './components/product-page/ProductPage';
import { AppState } from './models/AppState';
import { Product } from './models/Product';
import { fetchAllProsucts } from './services/ProductsService';
import { setProducts } from './store/products/products.slice';

function App() {
  const {products} = useSelector((state: AppState) => state.productsState);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchAllProsucts()
      .then((res: Product[]) => dispatch(setProducts(res)))
      .catch(() => dispatch(setProducts([])))
  }, []);
  
  return (
    <>
      <Header/>
      {
        products && products.map((it: Product) => (
          <React.Fragment key={it.id}>
            <ProductPage product={it} key={it.id}/><br/>
          </React.Fragment>
        ))
      }
    </>
    
  );
}

export default App;
