import React, { useState, useEffect } from "react";
import "./Notification.css";

const Notification = (props) => {
    const [notification, setNotification] = useState(false);
    const [notificationTwo, setNotificationTwo] = useState(false);

    useEffect(() => {
        if(props.accountBalance === 1000) {
            setNotification(true);
        } else { 
            setNotification(false);
        }
    }, [props.accountBalance]); 

    useEffect(() => {
        if(props.savingsBalance === 2000) {
            setNotificationTwo(true);
        } else { 
            setNotificationTwo(false);
        }
    }, [props.savingsBalance]); 

    return (
        <div>
            { notification && (
                <div className="notification">
                    <button onClick={() => setNotification(false)} className="close-notification">x</button>
                    <p>Your account balance is too low.</p>
                    <p>You can't transfer more money today.</p>
                </div> 
            )}
            
            { notificationTwo && (
                <div className="notification">
                    <button onClick={() => setNotificationTwo(false)} className="close-notification">x</button>
                    <p>Your savings balance is too low.</p>
                    <p>You can't spend all your money, save some.</p>
                </div> 
            )} 
        </div>
    );
}


export default Notification; 
