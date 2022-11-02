import { PFHeader } from 'PFComponents';
import Introduction from 'PFSections/Introduction';

import './App.css';

const App = () => {
  return (
    <div className="pf app">
      <div className="pf safe-area">
        <div className="pf padding-horizontal-m relative">
          <PFHeader />
          <Introduction />
        </div>
      </div>
    </div>
  );
};

export default App;
