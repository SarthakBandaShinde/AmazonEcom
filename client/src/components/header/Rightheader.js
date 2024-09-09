import { React, useContext } from 'react'
import "./rightheader.css";
import { Avatar, Divider } from '@mui/material';
import { LoginContext } from '../context/ContextProvider';
import { NavLink } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
// import {logoutuser} from './Navbar';


const Rightheader = ({Logclose, logoutuser}) => {


    const { account, setAccount } = useContext(LoginContext);

    return (
        <>
            <div className='rightheader'>
                <div className="right_nav">
                    {
                        account ? <Avatar className='avtar2' >
                            {account.fname[0].toUpperCase()}</Avatar> :
                            <Avatar className='avtar'></Avatar>
                    }
                    {
                        account ? <h3>Hello, {account.fname.toUpperCase()}</h3> : " "
                    }
                </div>
                <div className='nav_btn' onClick={()=>Logclose()}>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/">Shop By</NavLink>
                    <Divider style={{width:"100%",marginleft:"-20px"}} />
                    <NavLink to="/">Today's Deal</NavLink>
                    {
                        account ? <NavLink to="/buynow">Your Orders
                        </NavLink> :
                            <NavLink to="/login">Your Order</NavLink>
                    }

                    <Divider style={{width:"100%",marginleft:"-20px"}} />
                    <div className='flag'>
                        <NavLink to="/">Settings</NavLink>
                        <img src="" alt='' />
                    </div>


                    {
                         account ? 
                         <div className='flag'>
                            <LogoutIcon   style={{fontSize:18,marginRight:4}} />

                            <h3 onClick={()=>logoutuser()} style={{cursor:"pointer",fontWeight:500}}>Logout</h3>
                         </div> :
                          <NavLink to="login">SignIn</NavLink>
                    }
                </div>
            </div>
        </>
    )
}

export default Rightheader
