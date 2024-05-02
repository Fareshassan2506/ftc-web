import React from 'react';
import './App.css'; // This imports the main CSS for your App, ensure it does not hide your Footer.
import Footer from './components/footer'; // Adjust the path as necessary to where your Footer component is located.

function App() {
  return (
    <div className="App">
      <Footer /> {/* This line ensures that Footer component is rendered */}
    </div>
  );
}

export default App;
