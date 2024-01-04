import React from 'react'
import ListItem from './ListItem'

const ListGroup = ({transactions, deleteTransaction}) => {
  return (
    <ul className="list-group my-2">
   {
     transactions.map(transaction => <ListItem key={transaction.id} 
      transaction={transaction} 
      deleteTransaction={deleteTransaction}/> )
   }
  </ul>
  )
}

export default ListGroup