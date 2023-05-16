import './App.css';
import Menu from './client/components/Menu';
import Quiz from './client/screens/Quiz';
import Home from './client/screens/Home';
import ScoreBoard from './client/screens/ScoreBoard';
import Auth from './client/screens/Auth';
import {Routes, Route} from 'react-router-dom'
import { useContext } from 'react';
import GlobalContext from './state/GlobalContext';
import { Navigate } from 'react-router-dom';

function App() {

  const {state: {userId, token}} = useContext(GlobalContext)

  return (
    <div>
      <Menu />
      <Routes>
        <Route path='/' element={token ? <Home /> : <Navigate to='/auth' />} />
        <Route path='/quiz' element={ token ? <Quiz /> : <Navigate to='/auth' />}/>
        <Route path='/scoreboard' element={token ? <ScoreBoard /> : <Navigate to='/auth' />}/>
        <Route path='/auth' element={!token ? <Auth /> : <Navigate to="/" />}/>
      </Routes>
    </div>
  );
}

export default App;
