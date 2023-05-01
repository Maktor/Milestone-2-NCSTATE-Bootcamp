// Thanks to https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  //To manage local state
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //To navigate through various URL
  const navigate = useNavigate();

  const submitButton = async (event) => {
    event.preventDefault();

    //POST request to the /api/login route using PORT 3001
    const check = await fetch("http://localhost:3001/api/login", {
      method: "POST",
      headers: {"Content-Type": "application/json",},
      body: JSON.stringify({username, password}),});
    
    //Code 200 to check if the request was successful
    if (check.status === 200) {
      navigate("/dashboard");
      console.log("successful")
    } else {
      alert("unsuccessful");
    }
  };

  //Rendering form
  return (
    <div className="LoginPage">
      <h1>Login</h1>
      <form onSubmit={submitButton}>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;