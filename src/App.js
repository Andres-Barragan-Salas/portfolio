import { Route, Routes } from 'react-router-dom';

import { PFFooter, PFHeader } from 'PFComponents';
import Home from 'PFScreens/home';

import './App.css';

const App = () => {
  return (
    <div className="pf app">
      <div className="pf safe-area">
        <div className="pf padding-horizontal-l relative">
          <PFHeader />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <PFFooter />
        </div>
      </div>
    </div>
  );
};

export default App;
