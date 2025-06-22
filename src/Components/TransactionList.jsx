import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';
import { Transaction } from './Transaction';

export const TransactionList = () => {
    const { transactions } = useContext(GlobalContext);

    return (
        <>
            <h3>History</h3>
            {transactions.length === 0 ? (
                <p style={{ textAlign: 'center', color: '#888' }}>No previous transactions</p>
            ) : (
                <ul className="list">
                    {transactions.map(transaction => (
                        <Transaction key={transaction.id} transaction={transaction} />
                    ))}
                </ul>
            )}
        </>
    );
};
