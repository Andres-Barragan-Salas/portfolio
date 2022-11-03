import { Route, Routes } from 'react-router-dom';

import { PFHeader } from 'PFComponents';
import Home from 'PFScreens/home';

import './App.css';

const App = () => {
  return (
    <div className="pf app">
      <div className="pf safe-area">
        <div className="pf padding-horizontal-m relative">
          <PFHeader />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
