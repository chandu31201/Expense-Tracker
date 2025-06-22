import React, { useState, useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';
import { v4 as uuidv4 } from 'uuid';

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');

    const { addTransaction } = useContext(GlobalContext);
        
    const onSubmit = (e) => {
        e.preventDefault();
        
        if (!text || !amount) {
            alert("Please enter both text and amount.");
            return;
        }

        const newTransaction = {
            id: uuidv4(), // Ensuring unique ID
            text,
            amount: parseFloat(amount)
        };
        
        addTransaction(newTransaction);

        // Reset input fields after submission
        setText('');
        setAmount('');
    };
    
    return (
        <>
            <h3>Add new Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input 
                        type="text" 
                        value={text} 
                        onChange={(e) => setText(e.target.value)} 
                        placeholder="Enter Text..." 
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        Amount<br />
                        (negative - expense, positive - income)
                    </label>
                    <input 
                        type="number" 
                        value={amount} 
                        onChange={(e) => setAmount(e.target.value)} 
                        placeholder="Enter Amount..." 
                    />
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </>
    );
};
