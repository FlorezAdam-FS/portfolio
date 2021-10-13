import './App.css';
import Navbar from './components/Navbar';
import Routes from './components/Routes';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <main>
          <Routes />
        </main>
      </div>
    </Router>
  );
}

export default App;
