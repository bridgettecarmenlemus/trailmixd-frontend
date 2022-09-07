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
  const auth = getAuth();
  const value = { user, setUser, auth };
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
