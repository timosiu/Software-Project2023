import { useState, useCallback, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import { AuthContext } from "./context/auth-context";

import Homepage from "./homepage/Homepage";
import Loginpage from "./loginpage/Loginpage";
import Contactpage from "./contactpage/Contactpage";
import LocationListpage from "./locationpage/LocationListpage";
import Profilepage from "./profilepage/Profilepage";
import Navbar from "./navbar/Navbar";
import "./App.css";

const queryClient = new QueryClient();

let logoutTimer;

// VITE_API_URL
function App() {
  const [token, setToken] = useState(false);
  const [userId, setuser] = useState(false);
  const [tokenExpirationDate, setTokenExpirationDate] = useState(false);

  const login = useCallback((uid, token, email, expirationDate) => {
    setToken(token);
    setuser(uid);

    const tokenExpirationDate =
      expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);
    setTokenExpirationDate(tokenExpirationDate);
    localStorage.setItem(
      "userData",
      JSON.stringify({
        userId: uid,
        token,
        expiration: tokenExpirationDate.toISOString(),
      })
    );
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setuser(null);
    setTokenExpirationDate(null);
    localStorage.removeItem("userData");
  }, []);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (
      storedData &&
      storedData.token &&
      new Date(storedData.expiration) > new Date() //if greater, the expiration is in the future
    ) {
      login(
        storedData.userId,
        storedData.token,
        new Date(storedData.expiration)
      );
    }
  }, [login]);

  useEffect(() => {
    if (token && tokenExpirationDate) {
      const remainingTime =
        tokenExpirationDate.getTime() - new Date().getTime();
      logoutTimer = setTimeout(logout, remainingTime);
    } else {
      clearTimeout(logoutTimer);
    }
  }, [token, logout, tokenExpirationDate]);

  const routes = (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/loginpage" element={<Loginpage />} />
      <Route path="/contactpage" element={<Contactpage />} />
      <Route path="/locationpage" element={<LocationListpage />} />
      <Route path="/profile" element={<Profilepage />} />
      <Route path="*" element={<Navigate to="/" />} />
      {/* additional pages here */}
    </Routes>
  );

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        login: login,
        logout: logout,
      }}
    >
      <QueryClientProvider client={queryClient}>
        <Router>
          <Navbar />
          {/* navigation bar here */}
          {routes}
        </Router>
      </QueryClientProvider>
    </AuthContext.Provider>
  );
}

export default App;
