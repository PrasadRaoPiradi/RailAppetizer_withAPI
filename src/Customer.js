import './App.css';
import React, { useState } from "react";
import Basket from './Basket';
import data from './data';
import Product from './Product';
import { useEffect } from 'react';
import { useTransition } from 'react';

function Customer() {
     //const {products} =data;

    const [cartItems, setCartItems] = useState([]);

    const onAdd = (product) => {
    console.log("On Add...");
    const exist = cartItems.find((x)=>x.id === product.id);
    if (exist){
        const newCartItems = cartItems.map((x)=>
        x.id === product.id ? {...exist, quantity:exist.quantity+1}:x);
        setCartItems(newCartItems);
        localStorage.setItem('cartItems', JSON.stringify(newCartItems));
    } else{
        const newCartItems = [...cartItems, {...product,quantity:1}];
        setCartItems(newCartItems);
        localStorage.setItem('cartItems', JSON.stringify(newCartItems));
    }
  }
  const onRemove = (product) => {
    const exist = cartItems.find((x)=> x.id === product.id);

    if (exist.quantity === 1)
    {
        const newCartItems = cartItems.filter((x)=> x.id !== product.id);
        setCartItems(newCartItems);
        localStorage.setItem('cartItems', JSON.stringify(newCartItems));
    } else {
        const newCartItems = cartItems.map((x)=>
        x.id === product.id ? {...exist, quantity:exist.quantity -1 }:x);
        setCartItems(newCartItems);
        localStorage.setItem('cartItems', JSON.stringify(newCartItems));
    }

  }
    const [isPending, startTransition] = useTransition();
    
    useEffect(()=>{
        setCartItems(
            localStorage.getItem('cartItems')
            ? JSON.parse(localStorage.getItem('cartItems'))
            : []
        );
    })

  return isPending ? (<div>Loading...</div>): (
   
      <div className="row">
 <div className="title">
            <a href='#/'>
        <input class="form-check-input" type="radio" defaultChecked={true} name="inlineRadioOptions" id="inlineRadio1" value="option1"  />
        <label class="form-check-label" for="inlineRadio1"><h4><font color="green">Bengaluru City</font></h4></label>
        </a>
        <a href='#/'>
        <input class="form-check-input" type="radio" defaultChecked={false} name="inlineRadioOptions" id="inlineRadio2" value="option2" />
        <label class="form-check-label" for="inlineRadio2"><h4><font color="green">Tumkur</font></h4></label>
        </a>

        <a href='#/'>
        <input class="form-check-input" type="radio" defaultChecked={false} name="inlineRadioOptions" id="inlineRadio3" value="option3" />
        <label class="form-check-label" for="inlineRadio2"><h4><font color="green">Mandya</font></h4></label>
        </a>

        <a href='#/'>
        <input class="form-check-input" type="radio" defaultChecked={false} name="inlineRadioOptions" id="inlineRadio4" value="option4" />
        <label class="form-check-label" for="inlineRadio2"><h4><font color="green">Mysore</font></h4></label>
        </a>
          <br></br>
          <br></br>
          <h4 className='glow'>Restuarants Serving Now</h4>
          <div className="underline"></div>
          <br></br>
          <a href='#/'>
        <input class="form-check-input" type="radio" defaultChecked={true} name="inlineRadioOptions1" id="inlineRadio5" value="option5"  />
        <label class="form-check-label" for="inlineRadio1"><h4><font color="blue">Nandini Restaurant</font></h4></label>
        </a>
        <a href='#/'>
        <input class="form-check-input" type="radio" defaultChecked={false} name="inlineRadioOptions1" id="inlineRadio6" value="option6" />
        <label class="form-check-label" for="inlineRadio2"><h4><font color="blue">Nagarjuna Restaurant</font></h4></label>
        </a>

        <a href='#/'>
        <input class="form-check-input" type="radio" defaultChecked={false} name="inlineRadioOptions1" id="inlineRadio7" value="option7" />
        <label class="form-check-label" for="inlineRadio2"><h4><font color="blue">Anand Restaurant</font></h4></label>
        </a>

          <div className="cart-icon">
            <img src="./images/cart.png" alt="cart"/>
            <p>{cartItems.length}</p>
          </div>
        </div>
             
      <div className='block column-2'>
        
        <h2> Products</h2>

        <div className='row'>
            {data.map((product)=>(
                <Product 
                key={product.id} 
                product={product} 
                item={cartItems.find((x)=> x.id === product.id)}
                onAdd={onAdd} 
                onRemove={onRemove}> </Product>
            ))}


        </div>
      </div>

      <Basket
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
        ></Basket>
  
      </div>


  );
}

export default Customer;