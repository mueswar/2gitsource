import Product from "./Product";
function Display () {

    const products = [
        {name:"one", discription:"one description"},
        {name:"two", discription:"two description"}
    ];

    return (
        <div>
        <h2>Display</h2>
        <Product name={products[0].name} desc={products[0].discription} ></Product>
         <Product name={products[1].name} desc={products[1].discription}></Product>
        </div>
    );
}
export default  Display;