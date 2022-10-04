import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

import HomePage from "./pages/home";
import {UnknownMsgPage} from "./pages/unknown_route";


function App() {
  return (
    <BrowserRouter>

      <div className="App">


        <Routes>
          <Route path="/Network/build" element={<HomePage/>}/>  {/*  pour npm start */}
          <Route path="/Network/build/index.html" element={<HomePage/>}/>  {/*  pour le site web  */}
          <Route path="*" element={<UnknownMsgPage/>}/>
        </Routes>
      
      </div>

    
    </BrowserRouter>
  );
}

export default App;
