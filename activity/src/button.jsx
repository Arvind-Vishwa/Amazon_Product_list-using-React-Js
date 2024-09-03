function printhello(){
    console.log("Hello");
}
function Button(){
    return (
        <div>
            <Button onClick={printhello}>Click me!</Button>
        </div>
    );
}
export default Button