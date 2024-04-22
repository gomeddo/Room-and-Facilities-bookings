import logo from './assets/logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Dashboard';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Header/>
     <Dashboard/>
     </BrowserRouter>
    </div>
  );
}

export default App;
