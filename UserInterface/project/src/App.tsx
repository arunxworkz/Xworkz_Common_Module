import React, { useEffect } from 'react';
import Layout from './components/layout/Layout';
import Home from './pages/Home';

function App() {
  // Implement smooth scrolling
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <Layout>
      <Home />
    </Layout>
  );
}

export default App;