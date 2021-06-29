import React from 'react'
import Providers from '../context/GlobalState';
import {useContext,useState} from 'react'
function Balance() {
const [balance, setbalance] = useState(0);
    const txt = useContext(Providers)
  
     const amtarr = txt.state.map(itm=>parseInt(itm.amount));   
    let bal  =  amtarr.reduce((acc,ele)=> acc+ele,0);
 
    console.log(bal);
    
    return (
        <div>
            <h3>Balance</h3>
            <h2>{bal}</h2>
        </div>
    )
}

export default Balance;