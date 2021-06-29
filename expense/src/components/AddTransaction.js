import React from 'react'
import {useContext,useState} from 'react'
import Providers from '../context/GlobalState'
const AddTransaction = () => {
const [text, settext] = useState();  
const [amt, setamt] = useState(); 
const txt = useContext(Providers); 
const addtran =()=>{
    if(Number(amt)==amt && text != Number(text)){
  const newtx = {
      item : text,
      amount : amt ,
      ids : Math.floor(Math.random()*100000)
  }  
  txt.dispatch({type : "ADD" , list : newtx}); 
    }else{
        alert("Enter valid detail")
    }
} 


return (
        <div className="add-transaction">
            <h3>Add new transaction</h3>
            <p>Text</p>
            <input type="text" value={text} placeholder="Enter Item" onChange={(e)=>{settext(e.target.value)}}></input>
            <p>Amount &nbsp;&nbsp;&nbsp;&nbsp;(negative -expensive,positive +income) </p>
            <input type="text" value={amt} placeholder="Enter Amount " onChange={(e)=>{setamt(e.target.value)}}></input>
            <button onClick={addtran}>Add transaction</button>        
           
        </div>
    )
}

export default AddTransaction
