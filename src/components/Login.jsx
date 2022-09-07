import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import { useEffect } from 'react';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';



export default function Login () {
 const {user, setUser }= useContext(UserContext)
    const provider = new GoogleAuthProvider();
    const auth = getAuth()
    let navigate = useNavigate()

    const handleLogin = () => {
      signInWithPopup(auth, provider)
      .then((result) => {
            setUser(result.user)
            navigate("/trails");
          })
          .catch((error) => alert(error.message));
      };



  return (
    <div>
      <button className="button" onClick={handleLogin}><i className="fab fa-google"></i>Sign in with google</button>
    </div>
  )
}


