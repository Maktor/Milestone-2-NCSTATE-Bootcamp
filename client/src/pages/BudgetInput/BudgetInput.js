import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function BudgetInput() {

// const [days, setDays] = useState("0");
const [budget, setBudget] = useState("0");
const [expenses, setExpenses] = useState("0");
const [spendings, setSpendings] = useState([]);

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

  const addNecessarySpending = (event) => {
    event.preventDefault();
    const spendingName = document.getElementById("spendingName").value;
    const spendingAmount = document.getElementById("spendingAmount").value;
  
    if (!spendingName) {
      alert("Please enter a spending name.");
    } else if (isNaN(spendingAmount)) {
      alert("Please enter a spending amount.");
    } else if (spendingAmount < 0) {
      alert("Spending amount must be greater than or equal to 0.");
    } else {
      setSpendings([...spendings, { name: spendingName, amount: spendingAmount }]);
      document.getElementById("spendingName").value = "";
      document.getElementById("spendingAmount").value = "";
    }
  };

  return (
    <div className="DashboardPage">
      <h1>Dashboard</h1><br/>
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
      </form>
      <h2 id ="total">N/A</h2><br/>

      <form onSubmit={addNecessarySpending}>
        <h2>Necessary Spendings</h2> 
        <label htmlFor="spendingName">Spending Name: </label>
        <input type="text" id="spendingName" placeholder="Spending Name"/><br/><br/>
        <label htmlFor="spendingAmount">Spending Amount: </label>
        <input type="number" id="spendingAmount" placeholder="Spending Amount"/><br/><br/>
        <button type="submit">Add Spending</button>
      </form>

      <div>
        <ul>
          {spendings.map((spending, index) => (
          <li key={index} > {spending.name}: {spending.amount}</li>
          ))}
        </ul>
      </div>
      <br/><button onClick={function(){navigate("/dashboard");}}>Back</button>

    </div>
  );
}

export default BudgetInput;
