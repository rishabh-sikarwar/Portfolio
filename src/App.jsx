import React from 'react'
import Header from './components/Header'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Page5 from './pages/Page5';
import Page6 from './pages/page6';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
        <Header />
      <div id="main">
        <Page1 />
        <Page2 />
        <Page3 />
        <Page5 />
        <Page6/>
        <Page4 />
        <Footer/>
        
      </div>
    </>
  );
}

export default App