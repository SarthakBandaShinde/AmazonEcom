import React from 'react'
import "./footer.css";
const Footer = () => {

    const year  = new Date().getFullYear();
    console.log(year);





  return (
    <footer>

        <div className="footer_container">
            <div className="footer_details_one">
                <h3>Get to know us</h3>
                <p>About Us</p>
                <p>Careers</p>
                <p>Press Releases</p>
                <p>Amazon Cares</p>
            </div>
            <div className="footer_details_one">
                <h3>Connect with Us</h3>
                <p>Facebook</p>
                <p>Instagram</p>
                <p>Twitter</p>
            </div>
            <div className="footer_details_one  forres">
                <h3>Make Money with US</h3>
                <p>Facebook</p>
                <p>Instagram</p>
                <p>Twitter</p>
            </div>
            <div className="footer_details_one  forres">
                <h3>Make Money with US</h3>
                <p>Facebook</p>
                <p>Instagram</p>
                <p>Twitter</p>
            </div>
        </div>
        <div className='lastdetails'>
            <img src='./amazon_PNG25.png' />
           <pre>Conditions of Use & Sale    Privacy Notice    Interest-Based Ads    © 1996-{year},Amazon.com,Inc. or its affiliates


   </pre>
         </div>
    </footer>
  )
}

export default Footer
