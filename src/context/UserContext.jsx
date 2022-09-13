import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState, createContext, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../service/firebase";

initializeApp(firebaseConfig)

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const { Provider } = UserContext;
  const [user, setUser] = useState();
  const [loaded, setLoaded] = useState(false);
  const [review, setReview] = useState("");
  const [hikingTrails, setHikingTrails] = useState();
  const auth = getAuth();
  const value = { user, setUser, auth, review, setReview, fetchHikingTrails, hikingTrails, setHikingTrails};


  function fetchHikingTrails() {
    fetch("https://trailmixd-api.web.app/gethikingtrails")
      .then((results) => results.json())
      .then((data) => setHikingTrails(data))
      .catch((e) => console.error(e));
  }

  useEffect(() => {
    onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoaded(true);
    });
  }, [auth]);

  if (!loaded) {
    return <></>;
  }

  return <Provider value={value}>{children}</Provider>;
};
