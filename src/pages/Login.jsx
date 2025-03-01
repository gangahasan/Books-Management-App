import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../redux/actions/authActions';

const Login = () => {
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch('');
    const navigate = useNavigate();

    const handleLogin = (e) =>{
        e.preventDefault()
      console.log("clicked");
        console.log(email,"login")

        dispatch(login(email,password));
        navigate('/mybooks');
        alert("login successful")
    }
  return (
    <div>
      <h1>Login</h1>
      {/* Form for user login */}
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="Login" />
      </form>
      
    </div>
  );
}

export default Login