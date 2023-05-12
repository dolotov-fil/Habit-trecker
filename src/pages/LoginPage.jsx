
import { Link } from 'react-router-dom';
import { Login } from '../componentsFire/Login';

const LoginPage = () => {
    return (
        <div className="paran">
            <p  className="register">Login</p>
            <Login/>
            <p>
                 <Link to="/register" className="btnlogin">register</Link>
            </p>
        </div>
    )
}

export default LoginPage