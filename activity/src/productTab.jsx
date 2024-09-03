import Product from "./product";
function ProductTab(){
    let styles={
        display:"flex",
        justifyContent:"center",
    };
    return (
        <div style={styles}>
        <Product title="Logitech" idx={0}/>
        <Product title="Apple Ipad" idx={1}/>
        <Product title="Zebronics " idx={2}/>
        <Product title="Pentronics" idx={3}/>
        </div>
    );
}
export default ProductTab