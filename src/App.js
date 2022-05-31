
import './App.css';
import { Nav } from './components/navBar'
import { Button } from './components/button'
import {AuthContext} from './context/AuthContext'
import { useContext } from 'react';
import {Display} from './components/display'
function App() {
  const {isAuth,toggleAuth}=useContext(AuthContext)
  return (
    <div className="App">
      <Nav>
        <Button onClick={() => {
          toggleAuth()
        }}>
          {isAuth===false?'Login':'Logout'}</Button>
      
      </Nav>
      {isAuth===false?<h1>Please Log In First</h1>:<Display/>}
    </div>
  );
}

export default App;
