import React, { createContext, useReducer } from "react";
import AppReducer from './AppReducer'


//Initial State
const initialState = {
    transactions: [
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Camera', amount: -20000 },
        { id: 3, text: 'Salary', amount: 1200000 },
        { id: 4, text: 'Book', amount: -10 },
        { id: 5, text: 'Phone', amount: -111110 },
        { id: 6, text: 'Ps5', amount: -50000 },
        { id: 7, text: 'Bugati', amount: -20000000 },
        { id: 8, text: 'House Emi', amount: -320008 },
        { id: 9, text: 'Rent', amount: 5000000 },
    ]
} 

// Create Context

export const GlobalContext = createContext(initialState);

//Provider Component

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);



    //Actions
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }
    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>);
    
}