import React,{useState,useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

export const AddTransaction = () => {
    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)

    const {addTransaction}=useContext(GlobalContext)
    const {transactions}=useContext(GlobalContext)
    let last=transactions.length
    let id=0
    if(last!==0)
    id=transactions[last-1].id+1
    
    const onSubmit=(e)=>{
        e.preventDefault();
        const newTransaction={
            id,
            text,
            amount:+amount
        }
        addTransaction(newTransaction)
    }

    return (
        <React.Fragment>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e)=>{setText(e.target.value)}} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br />
            (negative - expense, positive - income)</label>
                    <input type="number" value={amount} onChange={(e)=>{setAmount(e.target.value)}} placeholder="Enter amount..." />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </React.Fragment >
    )
}
