import './App.css';
import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import LocaleContext from './LocaleContext';
import i18n from './i18n';
import NavBar from './components/NavBar';




function App() {
  
  const [locale, setLocale] = useState(i18n.language);

  return (
    <LocaleContext.Provider value={{locale, setLocale}}>
      <div className='dark:bg-gray-700'>
        <NavBar/>
        <Router>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/portfolio' element={<Portfolio />}/>
          </Routes>
        </Router>
      </div>
    </LocaleContext.Provider>
  );
}

export default App;
