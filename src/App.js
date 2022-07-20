import React from 'react';
import Booklist from './components/Booklist';
import Navbar from './components/Navbar';
import Themetoggle from './components/Themetoggle';
import ThemeContextProvider from './context/ThemeContext';

 function App() {
  return (
    <div className='App'>
      <ThemeContextProvider>
      <Navbar />
      <Booklist />
      <Themetoggle />
      </ThemeContextProvider>
    </div>
  )
}

export default App;