import React, { useEffect } from 'react';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Signup from './components/home/Signup';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 


function App() {
  // Implement smooth scrolling
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>  
      </Layout>
    </Router>  
  );
}

export default App;