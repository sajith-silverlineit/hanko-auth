import {Route, Routes} from 'react-router-dom';
import './App.css';

import HankoAuth from './components/HankoAuth';
import HankoProfile from './components/HankoProfile';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<HankoAuth />} />
        <Route path="/dashboard" element={<HankoProfile />} />
      </Routes>
    </div>
  );
}

export default App;
