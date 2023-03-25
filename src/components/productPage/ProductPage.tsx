import Product from "../../models/Product";

export const ProductPage: React.FC<{product: Product}> = ({product}) => {
    return(
        <div className="product-page-container">
            <div className="carrousel-block">
                <img alt="Main image" src={product.images[0].main}/>
            </div>
            <div className="">

            </div>
        </div>
    )
}