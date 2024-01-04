import React, { useState } from 'react'

const MainSection = ({transactions, saveTransaction}) => {

     const balance= transactions.reduce((p,c)=>{
        return p+c.amount
     },0);
     const [text, setText]=useState("")
     const [amount, setAmount]=useState("")


     const handlesubmit=(e)=>{
        e.preventDefault()
        saveTransaction(text, amount);
        setText("");
        setAmount("");
     }

  return (
    <div className="Main-section ">
    <div className="row gy-2">
    <div className="col-md-4 col-sm-12 text-center p-1">
        <div className= "card p-4 ">
          <h1 className="card-title text-dark" >Current Balance</h1>
          <h1 className="display-4 text-success" >{balance}</h1>
     </div>
    </div>
      <div className="col-md-8 col-sm-12">
        <div className="card p-4 bg-secondary text-light" >
          <form onSubmit={handlesubmit}>
            <input
              type="text"
              placeholder="Enter Transaction Detail"
              className="form-control my-2"
              onChange={(e) => setText(e.target.value)}
              value={text}
              required
            />
            <input
              type="number"
              placeholder="Enter Amount"
              className="form-control my-2"
              onChange={(e) => setAmount(e.target.value)}
              value={amount}
              required
            />
            <button className="btn btn-primary w-100">Save</button>
          </form>
        </div>
      </div>

    </div>
  </div>
  )
}

export default MainSection