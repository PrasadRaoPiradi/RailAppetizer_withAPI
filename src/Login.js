import React from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const [status, setStatus] = React.useState(true)
    const [password, setMessage] = React.useState('');
    const [email, setEmail] = React.useState('');

    const handlePasswordChange = event => {
      setMessage(event.target.value);
  
      console.log('value is:', event.target.value);
    };
    const handleEmailChange = event => {
      setEmail(event.target.value);
  
      console.log('value is:', event.target.value);
    };

    const radioHandler = (status) => {
        setStatus(status);
      };
  return (

    <form>
    <h3>Sign In</h3>
    <div className="mb-3">
      <label>Email address</label>
      <input
        type="email"
        className="form-control"
        placeholder="Enter email"
        onChange={handleEmailChange}
      />
    </div>  
    <div className="mb-3">
      <label>Password</label>
      <input
        type="password"
        className="form-control"
        placeholder="Enter password"
        onChange={handlePasswordChange}
      />
    </div>
    <div className="mb-3">
    <div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" defaultChecked={true} name="inlineRadioOptions" id="inlineRadio1" value="option1"  onClick={(e) => radioHandler(true)} />
  <label class="form-check-label" for="inlineRadio1">Customer</label>
</div>

<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" defaultChecked={false} name="inlineRadioOptions" id="inlineRadio2" value="option2"  onClick={(e) => radioHandler(false) }/>
  <label class="form-check-label" for="inlineRadio2">Restaurant</label>
</div>
    </div>
    <div className="d-grid">
      <button type="submit" onClick={(e) => {
        let url = 'http://127.0.0.1:8000/api/checkCredential/'+ email+ "/" + password;
      //  console.log(url)
      e.preventDefault();
        fetch(url , {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
          })
          .then((response) => response.json())
          .then((data) => {
            console.log("Success:", data);
            if(data)
            {
              
            if(status)
            {
              sessionStorage.setItem("CredentialsCustomer", true)
            navigate("/")
            }
            else
            {
              sessionStorage.setItem("CredentialsRestaurant", true)
            navigate("/restaurantHome")
            }
            }
            else
            alert('invalid credentials')
          })
          .catch((error) => {
            console.error("Error:", error);
            alert('invalid credentials')
          });
          
        
         
}} className="btn btn-primary">
        Login
      </button>
    </div>
   <br></br>
   
    <div class="bg-light clearfix">
    <span>New User Registration?  </span>    
      <button type="button" class="btn btn-success float-right" onClick={() => {
          navigate("/signup")
}}>SignUp</button>
</div>
  </form>
  );
}

export default Login;