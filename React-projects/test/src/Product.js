import ProductDetails from "./ProductDetails";
function Product (props) {

    return (
        <div>
        <h3>Product : {props.name}</h3>
        <ProductDetails></ProductDetails>
        </div>
    );
}
export default Product;