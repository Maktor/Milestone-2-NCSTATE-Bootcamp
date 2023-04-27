import React, { useState, useEffect } from 'react';
import '../styles/MonthlySpending.css';

const MonthlySpending = () => {
    const [monthlyBudget, setMonthlyBudget] = useState('');
    const [displayBudget, setDisplayBudget] = useState('');

    const handleIt = (event) => {
        setMonthlyBudget(event.target.value);
      };
  
    // A function for the submit button
    const submitButton = () => {
        if (monthlyBudget && !isNaN(monthlyBudget)) {
          setDisplayBudget(monthlyBudget);
          localStorage.setItem('monthlyBudget', monthlyBudget);
        } else {
          alert('Please enter a valid amount');
        }
        setMonthlyBudget('');
      };

    // Use useEffect to locate and collect the entered budget from local storage (localStorage)
    useEffect(() => {
        const storedLocallyBudget = localStorage.getItem('monthlyBudget');
        if (storedLocallyBudget) {
          setDisplayBudget(storedLocallyBudget);
        }
      }, []);

    // Rendering it to the screen
    return (
      <div>
        <h3>Monthly Spending Budget</h3>
        <input type="text" placeholder="Enter your budget" value={monthlyBudget} onChange={handleIt}/>
        <button onClick={submitButton}>Enter</button>
        {
        displayBudget && (<p>Your monthly budget is <strong>${displayBudget}</strong></p>)
        }
      </div>
    );
  };
  
  export default MonthlySpending;