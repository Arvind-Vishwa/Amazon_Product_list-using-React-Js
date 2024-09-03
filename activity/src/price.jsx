export default function Price({oldPrice,newPrice}){
    let olsStyle={
        textDecorationLine:"line-through",
    }
    let newStyle={
        fontWeight:"bold",
        backgroundColor:"yellow",
    };
    return (
        <>
        <span style={olsStyle}>{oldPrice}</span>
        &nbsp;&nbsp;&nbsp;
        <span style={newStyle}>{newPrice}</span>
        </>
    );
}
