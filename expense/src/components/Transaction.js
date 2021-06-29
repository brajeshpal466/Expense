import React from 'react'
import { useContext } from 'react'
import Providers from '../context/GlobalState'
function Transaction(props) {
    const txt = useContext(Providers);
    console.log(txt.state);
    return (
        <div >
            <div className="list">
                <div className={props.amount > 0 ? 'positive' : 'negative'}></div><div><p>{props.text}</p> <p>{props.amount}</p></div>
                <div className="delete" onClick={(e) => { txt.dispatch({ type: "DEL", id: e.target.id }) }} id={props.ids}>Delete</div>
            </div>
        </div>
    )
}

export default Transaction
