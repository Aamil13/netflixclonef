
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import Nav from './Component/Navbar/Nav';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Account from './Pages/Account';

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext';
import ProtedRoute from './Component/protectedRoute/ProtedRoute';

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>

      <Nav/>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/account' element={<ProtedRoute><Account/></ProtedRoute>}/>
      </Routes>

      </AuthContextProvider>
      </BrowserRouter>
  );
}

export default App;
