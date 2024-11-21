import React, { useContext, useState } from "react";
import UserContext from "../../ContextApi/UserContext";
const Login = () => {
  const [userName, setUserName] = useState("");
  const [userPass, setUserPass] = useState("");
  const {setUser}=useContext(UserContext);
  const handleSubmit=(e)=>{
e.preventDefault();
setUser({userName,userPass});
  }
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="UserName"
      />
      <input
        type="text"
        value={userPass}
        onChange={(e) => setUserPass(e.target.value)}
        placeholder="Pass"
      />
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
};

export default Login;
