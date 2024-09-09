import {React,useEffect,useState} from 'react'

const Right = ({iteam}) => {

  const [price,setPrice] = useState(0);

  useEffect(()=>{
    totalAmount();
  },[iteam])

  const totalAmount = ()=>{
    let price=0;
    iteam.map((item)=>{
      price = item.price.cost + price

    })
    setPrice(price);
  }


  return (
    <div className='right_buy'>
        <div className='right_add'>
        <img src='/amalogo.png' alt='' />
        </div>
      
      <div className='cost_right'>
        <p>Your order id eligible for FREE Delivery.</p>
      
      <span style={{color:"#565959"}}>Select this option at checkout Details.</span>

      <h3>Subtotal ({iteam.length}items) :  <strong style={{fontWeight:700,color:"#111"}}>₹{price}.00 </strong> </h3>

    <button className='rightbuy_btn'>Process to Buy</button>
    <div className='emi'>
       EMI Option Available
    </div>
    
    </div>
</div>
  )
}

export default Right;
