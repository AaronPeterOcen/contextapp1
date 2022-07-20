import React from 'react';
import Booklist from './components/Booklist';
import Navbar from './components/Navbar';
import Themetoggle from './components/Themetoggle';
import AuthContextProvider from './context/Authcontext';
import ThemeContextProvider from './context/ThemeContext';

 function App() {
  return (
    <div className='App'>
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <Booklist />
          <Themetoggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  )
}

export default App;