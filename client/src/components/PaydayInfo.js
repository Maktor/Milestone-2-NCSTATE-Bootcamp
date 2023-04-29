import React, { useState, useEffect } from 'react';
import "../styles/PaydayInfo.css";

const PaymentSchedule = () => {
  const [paymentDate, setPaymentDate] = useState('');
  const [displayPaymentDate, setDisplayPaymentDate] = useState('');

  const handleChange = (event) => {
    setPaymentDate(event.target.value);
  };

  const handleSubmit = () => {
    if (paymentDate) {
      localStorage.setItem('paymentDate', paymentDate);
      setDisplayPaymentDate(paymentDate);
    } else {
      alert('Please enter a valid date');
    }
    setPaymentDate('');
  };

  useEffect(() => {
    const storedPaymentDate = localStorage.getItem('paymentDate');
    if (storedPaymentDate) {
      setDisplayPaymentDate(storedPaymentDate);
    }
  }, []);

  return (
    <div>
      <h2>Enter Your Payment Date</h2>
      <input type="date" value={paymentDate} onChange={handleChange} />
      <button onClick={handleSubmit}>Submit</button>
      {displayPaymentDate && (<p>You get paid on: <strong>{displayPaymentDate}</strong></p>)}
    </div>
  );
};

export default PaymentSchedule;