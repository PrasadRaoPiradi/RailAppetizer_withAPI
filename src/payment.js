import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';


export default function Payment() {
  const navigate = useNavigate();
  const [Name, setName] = useState('');
  const [creditCardNumber, setCCNumber] = useState('');
  const [CVV, setCVV] = useState('');
  return (    
    <form>
    <h1>Payment Details</h1>
   
    <h3>Total bill: Rs  </h3>
    <div className="mb-3">
      <label>Name</label>
      <input
        type="text"
        className="form-control"
        placeholder="Enter Name"
        onChange={(event) => {setName(event.target.value)}}
      />
    </div>
    <div className="mb-3">
      <label>Email address</label>
      <input
        type="email"
        className="form-control"
        placeholder="Enter email"
      />
    </div>
    <div className="mb-3">
      <label>CardNumber</label>
      <input
        type="text"
        onKeyPress={(event) => {
          if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
          }
        }}
        className="form-control"
        placeholder="16 Digit Card number"
        onChange={(event) => {setCCNumber(event.target.value)}}
      />
    </div>
    <div className="mb-3">
      <label>Expiration Date</label>
      <input
        type="text"
        className="form-control"
        placeholder="Expiration Data"
      />
    </div>
    <div className="mb-3">
      <label>CVV</label>
      <input
        type="text" onKeyPress={(event) => {
          if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
          }
        }}
        className="form-control"
        placeholder="CVV"
        onChange={(event) => {setCVV(event.target.value)}}
      />
    </div>
    <div className="mb-3">
    
    </div>
    <div className="d-grid">
      <button type="submit" onClick={(e) => {
         e.preventDefault();
         fetch("http://127.0.0.1:8000/api/verifyCard/" + creditCardNumber+ "/"+ CVV + "/"+ Name, {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("Success:", data);
            alert("payment Successful");
            navigate("/");
          })
          .catch((error) => {
            console.error("Error:", error);
            navigate("/");
          });
 
}} className="btn btn-primary">
        Make Payment
      </button>
    </div>
       
  </form>
   
  )
}