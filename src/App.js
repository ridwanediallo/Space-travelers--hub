import { Route, Routes } from 'react-router-dom';
import './App.css';
import Missions from './components/missions/Missions';
import NavBar from './components/navBar/NavBar';
import Profile from './components/profile/Profile';
import Rockets from './components/rockets/Rockets';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
