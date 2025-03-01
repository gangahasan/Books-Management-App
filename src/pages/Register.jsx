import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { register } from '../redux/actions/authActions';

const Register = () => {
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch('');

    const handleRegister = (e) => { 
        e.preventDefault();
        console.log(email, password,"user");
        dispatch(register(email,password))
        alert("Registered")
    }

  return (
    <div style={{margin:"10px",padding:"10px"}}>
        <h2>Register</h2>
        <form  onSubmit={handleRegister}>
          <input type="text" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
          <input type="submit" value="Register" />
        </form>
      <p>Already have an account? <a href="/login">Login</a></p>
    </div>
  )
}

export default Register