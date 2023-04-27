import './App.css';
import React from 'react';
import MonthlySpending from './components/MonthlySpending.js';
import PaydayInfo from './components/PaydayInfo';
import NecessarySpendings from './components/NecessarySpendings';
import MonthSelection from './components/MonthSelection';
import DailyBudget from './components/DailyBudget';
import WeeklyBudget from './components/WeeklyBudget';
import ExpenseInput from './components/ExpenseInput';
import SpendingAlert from './components/SpendingWarning';

function App() {
  return (
     <div className="App">
        <header className="App-header">
           {"TEST"}
        </header>
        <main>
           <MonthlySpending />
           <PaydayInfo />
           <NecessarySpendings />
           <MonthSelection />
           <DailyBudget />
           <WeeklyBudget />
           <ExpenseInput />
           <SpendingAlert />
        </main>
     </div>
  );
}

export default App;
