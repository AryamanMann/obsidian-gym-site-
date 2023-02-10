import React from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Program from './Components/Program';
import Offer from './Components/Offer';
import Review from './Components/Review';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Program />
      <Offer />
      <Review />
      <Contact />
    </div>
  );
}

export default App;
