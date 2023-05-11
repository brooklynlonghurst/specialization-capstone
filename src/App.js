import './App.css';
import Menu from './components/Menu';
import Quiz from './screens/Quiz';
import Home from './screens/Home';
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
