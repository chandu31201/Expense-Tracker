import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';

export const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    const total = transactions.reduce((acc, item) => acc + item.amount, 0);

    // Choose class based on total
    const balanceClass = total >= 0 ? 'balance-green' : 'balance-red';

    return (
        <div className={`balance-container ${balanceClass}`}>
            <h4>Your Balance</h4>
            <h1>₹{total}</h1>
        </div>
    );
};
