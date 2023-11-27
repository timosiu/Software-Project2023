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
import ServiceListpage from "./servicepage/ServiceListpage";
import Valuepage from "./valuepage/Valuepage";
import Profilepage from "./profilepage/Profilepage";
import ReservationPage from "./reservationpage/ReservationPage";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import "./App.css";

const queryClient = new QueryClient();

let logoutTimer;

// VITE_API_URL
function App() {
  const [token, setToken] = useState(false);
  const [userId, setUser] = useState(false);
  const [tokenExpirationDate, setTokenExpirationDate] = useState(false);

  const login = useCallback((uid, token, email, expirationDate) => {
    setToken(token);
    setUser(uid);

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
    setUser(null);
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
      <Route path="/servicepage" element={<ServiceListpage />} />
      <Route path="/valuepage" element={<Valuepage />} />
      <Route path="/profile" element={<Profilepage />} />
      <Route path="/reservation" element={<ReservationPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );

  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg">
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
            {routes}
            <Footer />
          </Router>
        </QueryClientProvider>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
