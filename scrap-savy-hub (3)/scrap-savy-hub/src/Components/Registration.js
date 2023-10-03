import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import userData from "../Pages/UserData";

function Registration(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleRegistration = () => {
        const newUser = { username, password }
        userData.push(newUser); 
        navigate("/login");
      };
  
    return (
      <div>
        <h2>Registration</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleRegistration}>Register</button>
      </div>
    );
    
}

export default Registration