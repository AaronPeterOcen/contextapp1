import React from 'react';
import Booklist from './components/Booklist';
import Navbar from './components/Navbar';
import ContextProvider from './context/ThemeContext';

 function App() {
  return (
    <div className='App'>
      <ContextProvider>
      <Navbar />
      <Booklist />
      </ContextProvider>
    </div>
  )
}

export default App;