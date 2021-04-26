import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomeCompoment from './components/Home';
import Navbar from './components/NavbarComponent';
// import LoginComponent from './components/Login'
//import RegisterCompoment from './components/Register'



function App() {
  return (
    <div>
      <Navbar />
      <HomeCompoment />
    </div>
  );
}

export default App;
