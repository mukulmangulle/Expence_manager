import React, { useState } from 'react'
import Navbar from './components/Navbar'
import ListGroup from './components/ListGroup'
import MainSection from './components/MainSection'
import BalanceSection from './components/BalanceSection'



const App = () => {

  const [transactions, setTransaction]=useState([
    {id:1, text: "Salary", amount:50000},
    {id:2, text: "Rent", amount: -10000},
  ]);

  const deleteTransaction=(id)=>{
   if(window.confirm("Are you sure")){
    setTransaction(transactions.filter(transaction=> transaction.id !== id)
    );
   }
  };

  const saveTransaction=(text, amount)=>{
    const newTransaction={
       id: crypto.randomUUID(),
       text: text,
       amount : +amount
    }
  
   setTransaction([newTransaction,...transactions])
  }



  return (
    <>
      <Navbar/>
      <div className='container p-5'>
           <MainSection transactions={transactions} saveTransaction={saveTransaction}/>
           <BalanceSection transactions={transactions}/>
           <ListGroup transactions={transactions} deleteTransaction={deleteTransaction}/>
      </div>
    </>
  )
}

export default App