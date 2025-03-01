import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { logout } from '../redux/actions/authActions';

const Navbar = () => {
    const userdata = useSelector((state)=>state.auth.user);
    // console.log(user.user,"in nav");
     const dispatch = useDispatch();
     const navigate = useNavigate();

     const handleLogout = () => {
        dispatch(logout);
        navigate("/login")
    }

  
  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-around"}}>
        <h2>Books Library</h2>
        <Link to="/">Home</Link>
        {userdata?
            (
             <div>
                <Link to="/mybooks">My Books</Link>
                <p>Loggedin as: {userdata?.user.email}</p>
                <button onClick={handleLogout}>Logout</button>
            </div>
            ):
            (<div>
                <Link to="/login">Login</Link> 
                <Link to="/register"> Register </Link>
            </div>
            )
        }
        
    </div>
  )
}

export default Navbar