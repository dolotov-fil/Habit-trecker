import { Link } from "react-router-dom";
import { SignUp } from "../componentsFire/SignUp";
import './Stylejsx.css';

const RegisterPage = () => {
  return (
    <div className="paran">
      <h1 className="register">Register</h1>
      <SignUp />
      <p>
        Already have an account? <Link to="/login" className="btnlogin">Sign in</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
