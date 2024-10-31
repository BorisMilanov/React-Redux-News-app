import React from 'react';
import News from './components/News';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Welcome to Tesla News</h1>
      <News />
    </div>
  );
};

export default App;