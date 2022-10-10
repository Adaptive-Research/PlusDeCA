import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import HomePage from "./pages/home";
import {UnknownMsgPage} from "./pages/unknown_route";
import LoginPage from "./pages/authentication/login";
import SignUpPage from "./pages/authentication/signup";


function App() {
   
    
    return (
        <BrowserRouter>

            <div className="App">

                <Routes>
                    <Route path="/" name="login" element={<LoginPage/>}/> {/*  pour npm start */}
                    <Route path="/signup" element={<SignUpPage/>}/>
                    <Route path="dashboard" element={<HomePage/>}/>
                    <Route path="*" element={<UnknownMsgPage/>}/>
                </Routes>

            </div>


        </BrowserRouter>
    );
}

export default App;
