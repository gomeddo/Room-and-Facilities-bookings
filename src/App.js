import Header from './components/Header';
import Dashboard from './components/Dashboard';
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
