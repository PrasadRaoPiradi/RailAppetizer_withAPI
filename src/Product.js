export default function Product(props){
    const {item, product, onAdd, onRemove} = props;
    return(
        <div className="card1"> 
            <div className="left1">
            <img className="small" src = {product.img} alt= {product.title}></img>
            </div>
            <div className="right1"><h6>{product.desc}</h6></div>
            <h3>{product.title}</h3>
            <div><h4><font color="green">Rs {product.price}</font></h4></div>
            <div>
                {item ? <div> 
                    <button onClick={()=> onRemove(item)} className="remove"><h5>-</h5></button>
                    <span className="p-1"><h7>{item.quantity}</h7></span>
                    <button onClick={()=> onAdd(item)} className="add"> <h5>+</h5> </button>
                </div>:(<button onClick={()=>onAdd(product)}><h5>Add to Cart</h5></button>)
                
                }
                
            </div>
        </div>
    )
}