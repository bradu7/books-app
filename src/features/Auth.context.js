import { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);
const userKey = 'user';
const tokenKey = 'token';

function getValueFromStorage(key) {
  const fromStorage = localStorage.getItem(key);
  if (fromStorage) {
    return JSON.parse(fromStorage);
  }
  return null;
}

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(() => getValueFromStorage(userKey));
  const [token, setToken] = useState(() => getValueFromStorage(tokenKey));

  function login({ user, accessToken }) {
    setUser(user);
    setToken(accessToken);
    localStorage.setItem(userKey, JSON.stringify(user));
    localStorage.setItem(tokenKey, JSON.stringify(accessToken));
    localStorage.setItem("favorites", JSON.stringify([]));
  }

  function logout() {
    setUser(null);
    setToken(null);
    localStorage.removeItem(userKey);
    localStorage.removeItem(tokenKey);
  }

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
