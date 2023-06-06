import './App.css';
import Menu from './client/components/Menu';
import Games from './client/screens/Games';
import Home from './client/screens/Home';
import ScoreBoard from './client/screens/ScoreBoard';
import Auth from './client/screens/Auth';
import {Routes, Route} from 'react-router-dom'
import { useContext } from 'react';
import GlobalContext from './state/GlobalContext';
import { Navigate } from 'react-router-dom';
import Footer from './client/components/Footer';

function App() {

  const {state: {userId, token}} = useContext(GlobalContext)

  return (
    <div>
      <Menu />
      <Routes>
        <Route path='/' element={token ? <Home /> : <Navigate to='/' />} />
        <Route path='/games' element={ token ? <Games /> : <Navigate to='/' />}/>
        <Route path='/scoreboard' element={token ? <ScoreBoard /> : <Navigate to='/' />}/>
        <Route path='/auth' element={!token ? <Auth /> : <Navigate to="/" />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
