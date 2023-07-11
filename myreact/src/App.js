import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Route, Routes } from 'react-router-dom';
import SignUp from './SignUp';
import Login from './Login';
import Page404 from './Page404';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>
        <Route path="/" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="*" element={<Page404/>}/>
        </Routes>
    </div>
  );
}

export default App;
