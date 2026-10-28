import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';

import Home from './pages/Home';
import Login from './pages/Login';
import theme from './theme';

const SESSION_KEY = 'restaurants_finder_session';

function App() {
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem(SESSION_KEY);
      return saved ? JSON.parse(saved) : null;
    } catch (e) {
      return null;
    }
  });

  const handleLogin = (loggedUser) => {
    setUser(loggedUser);
    try {
      localStorage.setItem(SESSION_KEY, JSON.stringify(loggedUser));
    } catch (e) {
      // ignore storage errors
    }
  };

  const handleLogout = () => {
    setUser(null);
    try {
      localStorage.removeItem(SESSION_KEY);
    } catch (e) {
      // ignore storage errors
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Reset />
      {user ? <Home user={user} onLogout={handleLogout} /> : <Login onLogin={handleLogin} />}
    </ThemeProvider>
  );
}

export default App;
