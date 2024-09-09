import { React, useContext, useEffect, useState } from 'react'
import "./cart.css";
import { useNavigate, useParams } from 'react-router-dom';
import { LoginContext } from '../context/ContextProvider';
import CircularProgress from '@mui/material/CircularProgress';

const Cart = () => {

  const { id } = useParams("");
  console.log(id);

  const history  =  useNavigate("");

  const { account, setAccount } = useContext(LoginContext);
  console.log(account);

  const [indata, setIndata] = useState("");
  console.log(indata);

  const getindata = async () => {
    const res = await fetch(`/getproductsone/${id}`, {
      method: 'GET',
      headers: {
        Accept:"application/json",
        'Content-Type': 'application/json'
      },
      credentials: "include"
    })

    const data = await res.json();
    console.log(data);


    if (res.status !== 201) {
      console.log("no data available");
    } else {
      console.log("getdata");
      setIndata(data);
    }
  }

  useEffect(() => {
    setTimeout(getindata,1000)
   
  }, [id]);

  // add cart func

  const addtocart = async (id) => {
    const checkres = await fetch(`/addcart/${id}`, {
      method: 'POST',
      headers: {
        Accept: "application/json",
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        indata
      }),
      credentials: "include"

    })

    const data1 = await checkres.json();
    console.log(data1);

    if (checkres.status === 401 || !data1) {
      // console.log("user invalid");
      alert("user invalid")
    } else {
      // alert("data addes in your cart");
      history("/buynow");
      setAccount(data1);
    }
  }



  return (

    <div className='cart_section'>
      {indata && Object.keys(indata).length &&
        <div className='cart_container'>
          <div className='left_cart'>
            <img src={indata.url} alt='cart_img' />
            <div className='cart_btn'>
              <button className='cart_btn1'
                onClick={() => addtocart(indata.id)}>Add to cart</button>
              <button className='cart_btn2'>Buy  Now</button>
            </div>
          </div>

          <div className='right_cart'>
            <h4>{indata.title.longTitle}</h4>
            <h3>{indata.title.shortTitle}</h3>

            <hr />
            <p className='mrp'>
              M.R.P : ₹{indata.price.mrp}
            </p>
            <p>Deal of the Day :<span style={{ color: 'red' }}>
              ₹{indata.price.cost}.00
            </span></p>
            <p>You save :<span style={{ color: 'red' }}>
              ₹{indata.price.mrp - indata.price.cost} ({indata.price.discount})
            </span></p>

            <div className='discount_box'>
              <p><span style={{ color: 'red' }} >
                {indata.discount}
              </span></p>

              <h4>Free Delivery : <span style={{ color: 'black', fontWeight: 600 }}>Oct 8 - 21</span> Details</h4>
              <p>Fastest delivery : <span style={{ color: 'black', fontWeight: 600 }}>Tomorrow 11AM</span> </p>
            </div>
            <p className='description'>About the Item : <span style={{ color: '#565959', fontWeight: 500, letterSpacing: '0.4px' }}> {indata.description}
            </span></p>



          </div>
        </div>
      };
      {!indata ? <div className="circle">
            <CircularProgress />
            <h2>Loading...</h2>
          </div> : ""}
    </div>

  )
}

export default Cart
