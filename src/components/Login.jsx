import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import "./Login.css";
import video from "../assets/videos/akn2.mp4";

export default function Login() {
  const { setUser } = useContext(UserContext);
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  let navigate = useNavigate();

  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        navigate("/trails");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login-page-container">
    <div className="sign-in-container">
      <div className="button">
      <button className="google" onClick={handleLogin}>
        Sign in with google
      </button>
      </div>
        <h1 className="header">
          Please click this button to sign in with google
        </h1>
    </div>
        <div className="login-video-container">
          <video src={video} autoPlay loop muted className="login-background-video" />
        </div>
    </div>
  );
}
