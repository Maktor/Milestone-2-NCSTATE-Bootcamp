import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import DashboardPage from "./pages/Dashboard/DashboardPage.js";
import BudgetInputPage from "./pages/BudgetInput/BudgetInput.js";
<<<<<<< HEAD
import NecessarySpending from "./pages/NecessarySpending/NecessarySpending";
import SpendingSummary from "./pages/SpendingSummary/SpendingSummary";
=======
import NecessarySpendingPage from "./pages/NecessarySpending/NecessarySpending";
import SpendingSummaryPage from "./pages/SpendingSummary/SpendingSummary";
>>>>>>> 41d980699f2e3a97902497adc22dd1bb9683a882

//Using JSX. Controlling the routes
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/budgetinput" element={<BudgetInputPage />} />
<<<<<<< HEAD
        <Route path="/necessaryspending" element={<NecessarySpending />} />
        <Route path="/spendingsummary" element={<SpendingSummary />} />
=======
        <Route path="/budgetinput/necessaryspending" element={<NecessarySpendingPage />} />
        <Route path="/spendingsummary" element={<SpendingSummaryPage />} />
>>>>>>> 41d980699f2e3a97902497adc22dd1bb9683a882
      </Routes>
    </Router>
  );
}

export default App;