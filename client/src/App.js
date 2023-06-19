import './App.css';

import {Route, useLocation } from 'react-router-dom';

import {Home, Detail, Form, Landing } from './view/index'
import Navbar from './components/Navbar/Navbar'


function App() {

  const location = useLocation()

  return (
    <div className="App">

      {location.pathname !== '/' && <Navbar />}

      <Route exact path="/" component={Landing}/>
      <Route exact path="/home" component={Home}/>
      <Route exact path="/home/:id" component={Detail}/>
      <Route exact path="/create" component={Form}/>

    </div>
  );
}

export default App;
