import {BrowserRouter, Route, Routes, Link} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'; 
import CrewBoard from "./views/CrewBoard";
import CreatePirate from "./views/CreatePirate"
import ViewPirate from "./views/ViewPirate";


function App() {
  return (
    <div className='m-5'>
      <BrowserRouter>
        <Routes>
          <Route path="/pirates" element = {<CrewBoard/>} />
          <Route path="/pirate/new" element = {<CreatePirate/>} />
          <Route path="/pirate/:id" element = {<ViewPirate/>} />
        </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
