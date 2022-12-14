import firebase from "firebase/app";
import "firebase/auth";
import { useEffect, useState } from "react";
import { useAuth } from "../hook/auth";

export const AuthStateChanged = ({ children }: any) => {
  const { setUser }: any = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });
    //eslint-disable-next-line
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return children;
};
