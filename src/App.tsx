import './App.css';
import { Header } from './components/header/Header';
import { ProductPage } from './components/productPage/ProductPage';
import Product from './models/Product';

const product: Product = {
  "id": 123,
  "name": "Fall limited edition sneakes",
  "description": "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sale, the'll withstand everything the weather can offer.",
  "images": [
      {
          "main": "/images/image-product-1.jpg",
          "thumb": "/images/image-product-1-thumbnail.jpg"
      },{
          "main": "/images/image-product-2.jpg",
          "thumb": "/images/image-product-2-thumbnail.jpg"
      },{
          "main": "/images/image-product-3.jpg",
          "thumb": "/images/image-product-3-thumbnail.jpg"
      },{
          "main": "/images/image-product-4.jpg",
          "thumb": "/images/image-product-4-thumbnail.jpg"
      }
  ],
  "price": 250,
  "brand": "Sneaker company",
  "discountPercent": 50
}

function App() {
  return (
    <>
      <Header/>
      <ProductPage product={product}/>
    </>
    
  );
}

export default App;
