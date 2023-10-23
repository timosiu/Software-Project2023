import {} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import Homepage from "./homepage/Homepage";
import Loginpage from "./loginpage/Loginpage";
import Contactpage from "./contactpage/Contactpage";
import Navbar from "./navbar/Navbar";
import "./App.css";

const queryClient = new QueryClient();

// VITE_API_URL
function App() {
  const routes = (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/loginpage" element={<Loginpage />} />
      <Route path="/contactpage" element={<Contactpage />} />
      <Route path="*" element={<Navigate to="/" />} />
      {/* additional pages here */}
    </Routes>
  );

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Navbar />
        {/* navigation bar here */}
        {routes}
      </Router>
    </QueryClientProvider>
  );
}

export default App;
