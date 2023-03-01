import { createContext, use, useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { setCookie, parseCookies, destroyCookie } from "nookies";
import Router from "next/router";

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const { registerUser, getUser, getUserInfo, isLoading } = useAuth();

  const isAuthenticated = !!user;

  useEffect(() => {
    const { "nextauth.token": token } = parseCookies();
    const { "nextauth.email": email } = parseCookies();

    if (token) {
      getUserInfo(email).then((response) => {
        setUser(response.data);
      });
    }
  }, []);

  async function signin({ email, password }) {
    const userInfo = await getUser({
      email,
      password,
    });

    setCookie(undefined, "nextauth.token", userInfo.data.token, {
      maxAge: 60 * 60 * 5, //one hour
    });

    setCookie(undefined, "nextauth.email", userInfo.data.data.email, {
      maxAge: 60 * 60 * 5, //one hour
    });

    getUserInfo(email).then((response) => {
      setUser(response.data);
    });

    Router.push("/");
  }

  async function signup({ name, email, phoneNumber, birthday, password }) {
    await registerUser({
      name,
      email,
      phoneNumber,
      birthday,
      password,
    });

    async function getUserInformation() {
      const userInfo = await getUser({
        email,
        password,
      });

      setCookie(undefined, "nextauth.token", userInfo.data.token, {
        maxAge: 60 * 60 * 1, //one hour
      });

      setCookie(undefined, "nextauth.email", userInfo.data.data.email, {
        maxAge: 60 * 60 * 1, //one hour
      });

      getUserInfo(email).then((response) => {
        setUser(response.data);
      });
    }

    setTimeout(() => {
      getUserInformation();
      Router.push("/");
    }, 1000);

    
  }

  function logout() {
    destroyCookie(undefined, "nextauth.email");
    destroyCookie(undefined, "nextauth.token");

    // window.localStorage.setItem("logout", Date.now()guardialo on successguardialo on success);
    setUser(null);
    Router.push("/");
  }

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, signup, signin, logout, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
}
