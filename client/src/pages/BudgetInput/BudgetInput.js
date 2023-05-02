import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function BudgetInputPage() {

// const [days, setDays] = useState("0");
const [budget, setBudget] = useState("0");
const [expenses, setExpenses] = useState("0");
const navigate = useNavigate();
let total = 0

const submitButton = async (event) => {
    event.preventDefault();
    let monthChosen = document.getElementById("month")
    let days = monthChosen.value
   if (budget > 0 && expenses >= 0)
   {
    total = (budget - expenses)/days
    document.getElementById("total").innerHTML = "Daily allowance: " + total;
   } 
   else
   {
    alert("Invalid values entered, please try again.")
   }

    console.log(days)
    console.log(budget)
    console.log(total)

  };

  return (
    <div className="DashboardPage">
      <h1>Dashboard</h1>
      <h2>Budget Testing</h2>
      <form onSubmit={submitButton}>
      Month: <select name="month" id="month">
    <option value="31">January</option>
    <option value="28">February</option>
    <option value="31">March</option>
    <option value="30">April</option>
    <option value="31">May</option>
    <option value="30">June</option>
    <option value="31">July</option>
    <option value="31">August</option>
    <option value="30">September</option>
    <option value="31">October</option>
    <option value="30">November</option>
    <option value="31">December</option>
      </select><br/><br/>
        {/* Number of Days: <input type="string" placeholder="Days" value={days} onChange={(e) => setDays(e.target.value)}></input><br/><br/> */}
        Monthly Expenses: <input type="string" placeholder="Expenses" value={expenses} onChange={(e) => setExpenses(e.target.value)}></input><br/><br/>
        Monthly Income: <input type="string" placeholder="Budget" value={budget} onChange={(e) => setBudget(e.target.value)}></input><br/><br/>
        <button type="submit">Calculate</button><br/><br/>
        <button onClick={function(){navigate("/dashboard");}}>Back</button>
      </form>
      <h1 id ="total">N/A</h1>
    </div>
  );
}

export default BudgetInputPage;