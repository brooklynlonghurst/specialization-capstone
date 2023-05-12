import './App.css';
import Menu from './client/components/Menu';
import Quiz from './client/screens/Quiz';
import Home from './client/screens/Home';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Menu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/quiz' element={<Quiz />}/>
      </Routes>
    </div>
  );
}

export default App;
