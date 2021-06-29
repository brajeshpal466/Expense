import './App.css';
import {useReducer } from 'react'
import Header from './components/Header'
import Balance from './components/Balance'
import IncomeExpense from './components/IncomeExpense'
import AddTransaction from './components/AddTransaction'
import History from './components/History'
import Providers from './context/GlobalState'
const initialState = [];
const reducer = (state,action)=>{
      switch(action.type){
       case 'ADD':
         return ([...state,action.list])
      case 'DEL':{
        return (state.filter((trx)=> trx.ids !== parseInt(action.id)))
      }
        }

}

function App() {
  const printpage = () =>{    
   window.print();
  }
const [state, dispatch] = useReducer(reducer, initialState)
 return (
    <Providers.Provider value={{state,dispatch}}>
<div className="main">  
  <Header></Header>
  <Balance></Balance>
  <IncomeExpense></IncomeExpense>
  <AddTransaction></AddTransaction>
  <History></History>
  <button onClick={printpage} > Print </button>
</div>   
</Providers.Provider>
  );
}

export default App;
