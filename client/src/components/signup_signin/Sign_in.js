import React from 'react'
import { useState, useContext } from 'react';
import "./sign.css";
import { NavLink, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LoginContext } from '../context/ContextProvider';

const Sign_in = () => {

  const [logdata, setData] = useState({
    email: "",
    password: ""
  });
  console.log(logdata);

  const {account, setAccount} = useContext(LoginContext);

  const history = useNavigate();

  const adddata = (e) => {
    const { name, value } = e.target;

    setData(() => {
      return {
        ...logdata,
        [name]: value
      }
    })

  }

  const senddata = async(e)=>{
    e.preventDefault();

      const {email, password} = logdata;


    const res = await fetch("/login", {
      method: "POST",
      headers: {
        Accept : "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
         email, password
      })
    });

    const data = await res.json();
    // console.log(data);

    if(res.status === 401 || !data){
      // console.log("invalid data");
      toast.warn('Invalid details', {
        position: "top-center",
      })
    } else {
      console.log("valid data")
      setAccount(data);
      history("/");
      toast.success('Login Successfully', {
        position: "top-center",
      })
      setData({...logdata,
        email:"",
        password:""
      });
    }
  }






  return (
    <>
      <section>
        <div className="sign_container">

          <div className="sign_header">
            <img src='./blacklogoamazon.png' />
          </div>
          <div className='sign_form'>
            <form method="POST">
              < h3>Sign In</h3>
              <div className='form_data'>
                <label htmlfor="email">Email</label>
                <input type="email"
                  onChange={adddata}
                  value={logdata.email}
                  id="email" name="email" placeholder="Enter your email" />
              </div>
              <div className='form_data'>
                <label htmlfor="password">Password</label>
                <input type="password" onChange={adddata} value={logdata.password} id="password" name="password" placeholder="Atleast 6 Char" />
              </div>
              <div className='signib-btn'></div>
              <button className='signin_btn' onClick={senddata}>Sign-in</button>

            </form>
          </div>

          <div className='create_accountinfo'>
            <p>Don't have an account?</p>
            <NavLink to="/register"><button> Create Your Amazon Account</button></NavLink>
          </div>
        </div>
        <ToastContainer/>
      </section>
    </>

  )
}

export default Sign_in
