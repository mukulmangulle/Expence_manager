import React from 'react'

const ListItem = ({transaction, deleteTransaction}) => {
  return (
    <li className="list-group-item my-1 d-flex align-items-center justify-content-between">
      <span>
        <h3 className=
       {transaction.amount > 0 ?
         "text-success"
         : "text-danger"
         }
        >
         {transaction.amount}
        </h3>
        <h4 className="text-secondary">
             {transaction.text}
        </h4>
      </span>
      <span>
        <button className="btn btn-sm btn-warning mx-1">Edit</button>
        <button className="btn btn-sm btn-danger" onClick={()=>deleteTransaction(transaction.id)}>Delete</button>
      </span>
      </li>
  )
}

export default ListItem;