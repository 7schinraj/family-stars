import logo from './logo.svg';
import './App.css';
import Nav from './Components/Navbar/Nav';
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import Login from './Components/LoginComp/Login.jsx';
import Income from './Components/IncomeComp/Income.jsx';
import Routings from './Routing/Routings.jsx';

function App() {
  return (
    <div className="App">
      <Routings/>
    </div>
  );
}

export default App;
