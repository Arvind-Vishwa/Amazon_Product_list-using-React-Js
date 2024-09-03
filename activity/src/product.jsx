import './product.css'
import Price from './price.jsx'
function Product({title,idx}){
let oldPrice =["12,495","11,900","1,599","599"];
let newPrice =["8,999","9,199","899","278"];
let Description=[["8,000 DPI", "Intutive for Ipad"],["surface is good","Intutive for Ipad"],["wireless","8,000 DPI"],["surface is good","Intutive for Ipad"]];
let styles={
    backgroundColor:"gold",
    color:"black",
};
    return (
        <div className="Product">
            <h4>{title}</h4>
            <p style={styles}>{Description[0]}</p>
            <p style={styles}>{Description[1]}</p>
            <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]}/>
        </div>
    );
}
export default Product