//TETSTTSTSTST


import React, { useState, useEffect } from 'react';
import '../styles/PaydayInfo.css';

const PaydayInfo = () => {
    const [dateOfPayment, setPaymentDate] = useState('');

  const handleChange = (event) => {
    setPaymentDate(event.target.value);
  };

  const submitButton = () => {
    if (dateOfPayment) {
        localStorage.setItem("dateOfPayment", dateOfPayment);
    } else {
        alert("enter a valid date");
    }
    setPaymentDate('');
  };

  return (
    <div>
        <h3>When do you get paid?</h3>
        <input type="date" value={dateOfPayment} onChange={handleChange}/>
        <button onClick={submitButton}>Enter</button>
    </div>
  );
};

export default PaydayInfo;