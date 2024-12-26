import './App.css';
import AddVisitor from './components/AddVisitor';
import Navbar from './components/Navbar';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Visitor from './components/visitor';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route index element={<Visitor/>}/>
    <Route path="/" element={<Visitor/>}/>
    <Route path="/addVisitor" element={<AddVisitor/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
