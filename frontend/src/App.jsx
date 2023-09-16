import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing/Landing';

function App() {

  return (
  <div>
    <Router>
    <Routes>
      <Route path='/' element={<Landing/>}/>
    </Routes>
    </Router>
  </div>  
  )
}

export default App
