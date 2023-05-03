import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function NecessarySpendingPage() {


  const navigate = useNavigate();

  const [spendings, setSpendings] = useState([]);
  const expenses = [];  

  const addNecessarySpending = (event) => {
    event.preventDefault();
    const spendingName = document.getElementById("spendingName").value;
    const spendingAmount = document.getElementById("spendingAmount").value;
    const expense = []
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
    //   expenses.push(expense = [spendingName, spendingAmount])
    //   console.log(expenses[0][0])
    }
  };

  return (
    <div className="NecessarySpendingPage">
      <h1>Spending</h1>
      <form onSubmit={addNecessarySpending}>
        <h2>Necessary Spendings</h2> 
        <label htmlFor="spendingName">Spending Name: </label>
        <input type="text" id="spendingName" placeholder="Spending Name"/><br/><br/>
        <label htmlFor="spendingAmount">Spending Amount: </label>
        <input type="number" id="spendingAmount" placeholder="Spending Amount"/><br/><br/>
        <button type="submit">Add Spending</button><br/><br/>
      </form>

      <div>
        <ul>
          {spendings.map((spending, index) => (
          <li key={index} > {spending.name}: {spending.amount}</li>
          ))}
        </ul>
      </div>

      <form>
        <button onClick={function(){navigate("/spendingsummary");}}>Summary</button><br/><br/>
        <button onClick={function(){
             window.localStorage.setItem("expenses", JSON.stringify(expenses));
            navigate("/budgetinput");}}>Back</button>
      </form>
    </div>
  );
}

export default NecessarySpendingPage;