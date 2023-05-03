import { useNavigate } from "react-router-dom";

function SpendingSummaryPage() {

  const navigate = useNavigate();

  return (
    <div className="SpendingSummaryPage">
      <h1>Summary</h1>
      <form>
        <button onClick={function(){navigate("/budgetinput");}}>Budget Input</button><br/><br/>
        <button onClick={function(){navigate("/budgetinput/necessaryspending");}}>Back</button>
      </form>
    </div>
  );
}

export default SpendingSummaryPage;