
import './App.css';
import {Route,Switch} from 'react-router-dom'
import Login from './pages/login/login'
import Admin from './pages/admin/admin'

import Test from './components/test/test';

function App() {
  return (
    <div className="App">
      <Test></Test>

      <Switch>
        <Route path='/login' component={Login}/>
        <Route path='/' component={Admin}/>

      </Switch>


    </div>
  );
}

export default App;
