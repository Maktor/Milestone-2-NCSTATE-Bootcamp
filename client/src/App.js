import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import DashboardPage from "./pages/Dashboard/DashboardPage.js";
import BudgetInputPage from "./pages/BudgetInput/BudgetInput.js";
import NecessarySpendingPage from "./pages/NecessarySpending/NecessarySpending";
import SpendingSummaryPage from "./pages/SpendingSummary/SpendingSummary";

//Using JSX. Controlling the routes
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/budgetinput" element={<BudgetInputPage />} />
        <Route path="/budgetinput/necessaryspending" element={<NecessarySpendingPage />} />
        <Route path="/spendingsummary" element={<SpendingSummaryPage />} />
      </Routes>
    </Router>
  );
}

export default App;