import { useNavigate } from 'react-router-dom';

export default function Basket(props){
    const {cartItems, onAdd, onRemove} = props;
    const itemsPrice = cartItems.reduce((a,c)=> a + c.quantity *c.price, 0);
    const taxPrice = itemsPrice *0.14;
    const deliveryPrice = itemsPrice > 200 ? 0: 20;
    const totalPrice = itemsPrice + taxPrice + deliveryPrice;
    const navigate = useNavigate();

    return <aside className='block column-1'>
        <h2><font color="green">Food Cart</font></h2>
       <div>
       {cartItems.length === 0 && <div><h5><font color="red">Cart is empty</font></h5></div>}
     
       {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="column-3"><h5>{item.title}</h5></div>
            <div className="column-1">
              <button onClick={() => onRemove(item)} className="remove1">
                -
              </button>{' '}
              <button onClick={() => onAdd(item)} className="add1">
                +
              </button>
            </div>

            <div className="column-2 text-right">
            <h5>{item.quantity}   x   Rs    {item.price.toFixed(2)}</h5>
            </div>
          
          </div>
          
        ))}

{cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="column-2 text-left"><h5>Items Price</h5></div>
              <div className="column-1 text-right">Rs   {itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="column-2 text-left"><h5>Tax Price</h5></div>
              <div className="column-1 text-right">Rs   {taxPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="column-2 text-left"><h5>Shipping Price</h5></div>
              <div className="column-1 text-right">
                Rs   {deliveryPrice.toFixed(2)}
              </div>
            </div>

            <div className="row">
              <div className="column-2 text-left">
                <h5><strong>Total Price</strong></h5>
              </div>
              <div className="column-1 text-right">
                <strong>Rs   {totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <button onClick={() => 
              {
                let p = "{ \"id\": 1, \"name\": \"Nandini Restaurant\", \"price\": 1200 , \"status\":\"Ordered\"}"
                let dataParserd = JSON.parse(p);
                dataParserd.price = totalPrice;
                //[{"id":1,"name":"Anand","ItemList":"detauls of order","status":"preparing","price":"1200/-"}]
                const requestOptions = {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  //body: JSON.stringify({"id":1,"emailID":"shaan0987@gmail.com","iscustomer":false,"Name":"Nadia","password":"shahnawaz","GST":"123123","MobileNumber":"9876543210","Location":"Bangalore"})
                  body: JSON.stringify({"id":1,"name":"Nandini Restaurant","ItemList":"detauls of order","status":"ordered","price":totalPrice})
              };
              console.log(requestOptions.body)
                fetch("http://127.0.0.1:8000/api/CreateOrder/", requestOptions)
                  .then((response) => response)
                  .then((data) => {
                    //console.log("Success:", data);
                    
                  })
                  .catch((error) => {
                    console.error("Error:", error);
                  });

                sessionStorage.setItem('trackOrder', JSON.stringify(dataParserd))
                 navigate("/Payment")
              }
                }>
              <h5>Checkout</h5>
                
              </button>
        
              
            </div>
          </>
        )}

       </div>
    </aside>;
    
}