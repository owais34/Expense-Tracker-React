import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
import {Transaction} from './Transaction'

export const TransactionList = () => {
    const {transactions} = useContext(GlobalContext)
    
    return (
        <React.Fragment>
            <h3>History</h3>
                <ul className="list">
                {transactions.map(item=>(
                    <Transaction id={item.id} text={item.text} amount={item.amount} id2={item.id}/>
                    ))}
                </ul>
            
            
        </React.Fragment>
    )
}
