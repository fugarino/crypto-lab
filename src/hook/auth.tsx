import { useRouter } from "next/router";
import { createContext, useContext, useState } from "react";
import { AuthService } from "../service/AuthService";

const authContext = createContext({});

export const useAuth = () => {
  return useContext(authContext);
};

export const AuthProvider = (props: any) => {
  const [user, setUser] = useState<any>(null);
  const [error, setError] = useState("");

  const router = useRouter();

  const loginWithGoogle = async () => {
    const { error, user } = await AuthService.loginWithGoogle();
    setUser(user ?? null);
    setError(error ?? "");
  };

  const logout = async () => {
    await AuthService.logout();
    setUser(null);
  };

  const createUserWithEmailAndPassword = async (email: any, password: any) => {
    if (email && password) {
      const { user, error } = await AuthService.createUserWithEmailAndPassword(email, password);
      if (error) {
        setError(error);
        return;
      }
      setUser(user ?? null);
      router.push(`/verify?email=${email}`);
    } else {
      setError("Email and Password can not be empty");
    }
  };

  const value = { user, error, loginWithGoogle, logout, setUser, createUserWithEmailAndPassword };

  return <authContext.Provider value={value} {...props} />;
};
