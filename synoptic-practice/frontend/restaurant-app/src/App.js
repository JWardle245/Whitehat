import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import  LoginPage from './pages/LoginPage';
import { Dashboard } from './pages/dashboard/dashboard';
import { Component } from 'react';

class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LoginPage/>}/>
          <Route exact path="/dashboard" element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;