import React, { useEffect, useState } from 'react';
import Option from './Option';
import "./buynow.css";
import Subtotal from './Subtotal';
import Right from './Right'
import { Divider } from '@mui/material';

const Buynow = () => {


  const [cartdata, setCartdata] = useState("");
  console.log(cartdata)

  

  const getdatabuy = async () => {
    const res = await fetch("/cartdetails", {
      method: "GET",
      headers: {
        Accept: "application/json",
        'Content-Type': 'application/json'
      },
      credentials: "include"
    });

    const data = await res.json();
    if (res.status !== 201) {
      alert("Error")
    } else {
      setCartdata(data.carts);
    }
  }


  useEffect(() => {
    getdatabuy();
  }, []);

  return (
    <>
    {
      cartdata.length ? 
      <div className='buynow_section'>
        <div className='buynow_container'>
          <div className='left_buy'>
            <h2>Shopping Cart</h2>
            <p>select all items</p>
            <span className='lefybuyprice'>Price</span>
            <Divider/>
            {
              cartdata.map((e, k) => {
                return (
                  <>
                    <div className='item_containert' key={k}>
                      <img src={e.url} alt='' />
                      <div className='item_details'>
                        <h3>{e.title.longTitle}</h3>
                        <h3>{e.title.shortTitle}</h3>
                        <h3 className='diffrentprice'>₹{e.price.cost}.00</h3>
                        <p className='unusually'>Usually dispatched in 8 days.</p>
                        <p>Eligible for FREE Shipping</p>
                        <img src="https://m.media-amazon.com/images/G/31?marketing/fba/fba-badge_18px-2x._CB485942108_.png" alt=''></img>
                        <Option deletedata={e.id} get={getdatabuy}/>
                      </div>

                      <h3 className='item_price'>₹{e.price.cost}.00</h3>
                    </div>
                    <Divider />
                  </>
                )
              })
            }

          
            <Subtotal iteam={cartdata} />
          </div>
         

          <div className='right_buy'>
            <Right iteam={cartdata} />
          </div>
        </div>
      </div> :""

          }
    </>

  )
}


export default Buynow;
