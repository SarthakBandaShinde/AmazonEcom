import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Sign_up = () => {

  const [udata, setUdata] = useState({
    fname: "",
    email: "",
    mobile: "",
    password: "",
    cpassword: ""
  });

  const history = useNavigate();

  const adddata = (e) => {
    const { name, value } = e.target;

    setUdata((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const senddata = async (e) => {
    e.preventDefault();
    const { fname, email, mobile, password, cpassword } = udata;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        Accept : "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        fname, email, mobile, password, cpassword
      })
    });

    const data = await res.json();

    if (res.status === 401|| !data) {
      toast.warn('Invalid details', {
        position: "top-center",
      });
    } else {
      history("/login");
      toast.success('Registration Successful', {
        position: "top-center",
      });

      setUdata({
        fname: "",
        email: "",
        mobile: "",
        password: "",
        cpassword: ""
      });
    }
  };

  return (
    <>
      <section>
        <div className="sign_container">
          <div className="sign_header">
            <img src='./blacklogoamazon.png' alt="Amazon Logo" />
          </div>
          <div className='sign_form'>
            <form method='POST'>
              <h3>Create Account</h3>
              <div className='form_data'>
                <label htmlFor="fname">Your Name</label>
                <input type="text" onChange={adddata} value={udata.fname} id="fname" name="fname" placeholder="Enter your name" />
              </div>
              <div className='form_data'>
                <label htmlFor="email">Email</label>
                <input type="email" onChange={adddata} value={udata.email} id="email" name="email" placeholder="Enter your email" />
              </div>
              <div className='form_data'>
                <label htmlFor="mobile">Mobile Number</label>
                <input type="text" onChange={adddata} value={udata.mobile} id="mobile" name="mobile" placeholder="Enter mobile number" />
              </div>
              <div className='form_data'>
                <label htmlFor="password">Password</label>
                <input type="password" onChange={adddata} value={udata.password} id="password" name="password" placeholder="At least 6 characters" />
              </div>
              <div className='form_data'>
                <label htmlFor="cpassword">Password again</label>
                <input type="password" onChange={adddata} value={udata.cpassword} id="cpassword" name="cpassword" />
              </div>

              <button className='signin_btn' onClick={senddata}>Continue</button>
            </form>

            <div className='signin_info'>
              <p>Already have an account? <NavLink to='/login'>Sign In</NavLink></p>
            </div>
          </div>
          <ToastContainer />
        </div>
      </section>
    </>
  );
}

export default Sign_up;
