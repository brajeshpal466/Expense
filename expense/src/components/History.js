import React from 'react'
import {useContext} from 'react'
import Providers from '../context/GlobalState'
import Trasaction from './Transaction'
function History() {
 const txt = useContext(Providers);
// console.log(txt.state);
    
    return (
      <div className="history">
         <h3>History</h3>  
      {txt.state.map((it)=><Trasaction text={it.item} amount={it.amount} ids={it.ids}></Trasaction>)}
      </div>
    )
}

export default History;
