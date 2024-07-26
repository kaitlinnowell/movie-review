import LoginBox from "../components/LoginBox";
import SignupBox from "../components/SignupBox";

function Login() {
  const x=true
  return (
    <div>
      {x===true ? <LoginBox />: <SignupBox/>}
    </div>
  );
}

export default Login;
