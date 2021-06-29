import React from 'react'
import Providers from '../context/GlobalState'
import {useContext} from 'react'
function IncomeExpense() {
    const txt = useContext(Providers);
    const amtarr = txt.state.map(itm => parseInt(itm.amount));
    let income = amtarr.filter( itm => itm>0 ).reduce((acc,ele)=> acc+ele,0);
    let expense = amtarr.filter( itm => itm<0 ).reduce((acc,ele)=> acc+ele,0);
    
    return (
        <>
         <div className="in-ex-container">
         <div className="income-container">
             <h5>INCOME</h5>
             <h3 style={{ color : "green"}}>{income}</h3>
         </div>
         <div className="expense-container">
             <h5>EXPENSE</h5>
             <h3 style={{color :"red"}}>{expense}</h3>
         </div>
         </div>

        </>
    )
}

export default IncomeExpense
