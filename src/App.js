import { PFHeader } from 'PFComponents';
import Introduction from 'PFSections/Introduction';
import Projects from 'PFSections/Projects';

import './App.css';

const App = () => {
  return (
    <div className="pf app">
      <div className="pf safe-area">
        <div className="pf padding-horizontal-m relative">
          <PFHeader />
          <Introduction />
          <Projects />
        </div>
      </div>
    </div>
  );
};

export default App;
