
import {React,useContext} from 'react';
import { LoginContext } from '../context/ContextProvider';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
const Option = ({ deletedata, get }) => {

  
  const {account, setAccount} = useContext(LoginContext);

  const removedata = async () => {
    try {
      const response = await fetch(`/remove/${deletedata}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      });

      const data = await response.json();
      console.log(data);

      if (response.status === 400 || !data) {
        console.log("Error: Unable to delete");
      } else {
        console.log("Data deleted successfully");
        setAccount(data);
        toast.success('item deleted', {
          position: "top-center",
        })
        get();
      }

    } catch (error) {
      console.log("Error:", error.message);
    }
  }

  return (
    <div className='add_remove_select'>
      <select>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <p style={{ cursor: "pointer" }} onClick={removedata}>Delete</p><span>|</span>
      <p className='forremovemedia'>Save for Later</p><span>|</span>
      <p className='forremovemedia'>See More like this</p>
      <ToastContainer/>
    </div>
  );
}

export default Option;
