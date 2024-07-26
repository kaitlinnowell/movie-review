import LoginBox from "../components/LoginBox";
import SignupBox from "../components/SignupBox";
import { useState } from "react";

function Login() {
  const [box, setBox] = useState("login");

  return (
    <div>
      {box === "login" ? (
        <LoginBox setBox={setBox} />
      ) : (
        <SignupBox setBox={setBox} />
      )}
    </div>
  );
}

export default Login;
