import React from 'react'

const BalanceSection = ({transactions}) => {

    const income= transactions
    .filter((transaction)=>transaction.amount>0)
    .reduce((p,c)=> p+c.amount,0);


    const expense= transactions
    .filter((transaction)=>transaction.amount<0)
    .reduce((p,c)=> p+c.amount,0);



  return (
    <div className="main-section my-2">
    <div className="row gy-2">
      <div className="col-md-6 col-sm-12">
        <div className=
          // {
          //   dark
            //  ? 
              "card p-3 border-success bg-secondary text-center"
             // : "card p-3 border-success"
         // }
        >
          <h4 className=
          //{dark ? 
          "text-light " 
          //: "text-secondary"}
          >
            current Income :
          </h4>
          <h1 className=
          //{dark ? 
          "text-light" 
          //</div>: "text-success"}
          >{income}</h1>
        </div>
      </div>
      <div className="col-md-6 col-sm-12">
        <div
          className=
          // {
          //   dark
          //     ?
               "card p-3 border-success bg-secondary text-center"
          //     : "card p-3 border-success"
          // }
        >
          <h4 className=
          // {dark ?
           "text-light"
            //: "text-secondary"}
            >
            current Expense :
          </h4>
          <h1 className=
          // {dark ? 
          "text-light" 
        //   : "text-danger"
        // }
          >
              {expense}
          </h1>
        </div>
      </div>
    </div>
  </div>

  )
}


export default BalanceSection