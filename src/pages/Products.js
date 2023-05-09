import { Link } from "react-router-dom";
import products from "../data";

const Products = () => {
  return (
    <div className="section">
      {products.map((product) => {
        console.log(product);
        return (
          <div key={product.id}>
            <div className="product-name"> {product.name}</div>
            <Link to={`${product.id}`} className="btn">
              more info
            </Link>
          </div>
        );
      })}
      <Link to="/" className="btn">
        Home
      </Link>
    </div>
  );
};
export default Products;
