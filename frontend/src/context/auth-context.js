import { createContext } from "react";

// Context for authentication
export const AuthContext = createContext({
  isLoggedIn: false,
  token: null,
  userId: null,
  login: () => {},
  logout: () => {},
});
