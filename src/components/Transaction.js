import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

export const Transaction = ({id2,text,amount}) => {
    const sign = amount < 0 ? '-' : '+';
    const {deleteTransaction}=useContext(GlobalContext)

    return (
            <li className={amount<0 ? "minus":"plus"}>
            {text} <span>{sign}${Math.abs(amount)}</span>
            <button className="delete-btn" onClick={()=>deleteTransaction(id2)}>x</button>
            </li>

    )
}
