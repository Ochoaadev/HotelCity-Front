import { useEffect } from "react";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

//////////////////////////////////////CAMBIAR RUTAS

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  });

  const signup = async (user) => {
    console.log(user);
    console.log(import.meta.env.VITE_URL_REGISTER);
    const response = await fetch(import.meta.env.VITE_URL_REGISTER, {
      method: "POST",
      body: JSON.stringify(user),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });
    const data = await response.json();
    console.log(data);
    if (data.status == 200) {
      setUser(data.payload);
      setIsAuthenticated(true);
      sessionStorage.setItem("token", data.token);
      return { ruta: "/", data: data };
    } else {
      setUser(null);
      setIsAuthenticated(false);
      return { ruta: "/Register", data: data };
    }
  };

  const signin = async (user) => {
    const response = await fetch("http://localhost:4000/login", {
      method: "POST",
      body: JSON.stringify(user),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });
    const data = await response.json();
    if (data.status == 200) {
      setUser(data.payload);
      setIsAuthenticated(true);
      sessionStorage.setItem("token", data.token);
      return { ruta: "/", data: data };
    } else {
      setUser(null);
      setIsAuthenticated(false);
      return { ruta: "/Login", data: data };
    }
  };

  const logout = () => {
    sessionStorage.removeItem("token");
    setUser(null);
    setIsAuthenticated(false);
  };

  useEffect(() => {
    const checkLogin = async () => {
      const token = sessionStorage.getItem("token");
      if (!token) {
        setIsAuthenticated(false);
        setLoading(false);
        return;
      }

      try {
        const response = await fetch("http://localhost:4000/Validate", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-type": "application/json; charset=UTF-8",
          },
        });
        const data = await response.json();
        if (data.status == 200) {
          setIsAuthenticated(true);
          setUser(data.payload);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
        setIsAuthenticated(false);
        setUser(null);
        setLoading(false);
        await logout();
      }
    };
    checkLogin();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signup,
        signin,
        logout,
        isAuthenticated,
        loading,
        user,
        theme,
        setTheme,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;