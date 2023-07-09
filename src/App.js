import React from 'react';
import Homepage from './Homepage';
import RegisterPage from './RegisterPage';
import Login from './Login';
import CandidateSearch from './CandidateSearch';

function App() {
  return (
    <div className="app">
      <Homepage />
      <RegisterPage/>
      <Login/>
      <CandidateSearch/>
    
    </div>
  );
}

export default App;
