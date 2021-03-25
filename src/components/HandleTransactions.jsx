import React, { useState, useEffect } from "react";
import Notification from "./Notification.jsx";

const HandleTransactions = (props) => {
    const [accountBalance, setAccountBalance] = useState();
    const [savingsBalance, setSavingsBalance] = useState();

    useEffect(() => {
        setAccountBalance(props.accounts.accountBalance);
        setSavingsBalance(props.accounts.savingsBalance);
      }, [props.accounts.accountBalance, props.accounts.savingsBalance]);

    const spending = () => {
        if(accountBalance > 1000) {
            setAccountBalance(accountBalance - 100);
            setSavingsBalance(savingsBalance + 100);
        }
    }

    const savings = () => {
        if(savingsBalance > 2000) {
            setSavingsBalance(savingsBalance - 100);
            setAccountBalance(accountBalance + 100);
        }
    }
   
    return (
        <div>
          <h1>Financial Transactions</h1>
            <div className="row">
                <div className="column">  
                    <h3 className="account">Your account balance:</h3>
                        <div className="circle-one"><h3 className="amount">${accountBalance}</h3></div>
                            <button className="send-money" onClick={() => spending()} >Send $100</button>
                </div>

                <div className="column">
                    <h3 className="account">Your savings balance:</h3>
                        <div className="circle-two"><h3 className="amount">${savingsBalance}</h3></div>
                            <button className="send-money" onClick={() => savings()} >Send $500</button>
                </div>
            </div>
            <Notification accountBalance={accountBalance} savingsBalance={savingsBalance} />
        </div>  
    );
}


export default HandleTransactions;
