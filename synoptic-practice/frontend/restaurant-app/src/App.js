import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import  HomePage from './Components/HomePage';
import { Dashboard } from './pages/dashboard/dashboard';
import { Component } from 'react';

class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage/>}/>
          <Route exact path="/dashboard" element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;