import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import HomePage from "./pages/home";
import Test from "./pages/test";
import {UnknownMsgPage} from "./pages/unknown_route";
import LoginPage from "./pages/authentication/login";
import SignUpPage from "./pages/authentication/signup";
import {CreateEnterprisePage} from "./pages/Enterprise/create";
import {ListEnterprisePage} from "./pages/Enterprise/list";
import {CreateActivityPage} from "./pages/Activities/create";


function App() {


    return (
        <BrowserRouter>

            <div className="App">

                <Routes>
                    <Route path="/Network/index.html" name="login" element={<LoginPage/>}/> {/*  pour le deploiement */}
                    <Route path="/Network/" name="login" element={<LoginPage/>}/> {/*  pour le deploiement */}

                    <Route path="/" name="login" element={<LoginPage/>}/> {/*  pour npm start */}
                    <Route path="/signup" element={<SignUpPage/>}/>
                    <Route path="dashboard" element={<HomePage/>}/>
                    <Route path="/test" element={<Test/>}/>
                    <Route path="/create_enterprise" element={<CreateEnterprisePage/>}/>
                    <Route path="/list_enterprise" element={<ListEnterprisePage/>}/>
                    <Route path="/create_activity" element={<CreateActivityPage/>}/>
                    <Route path="*" element={<UnknownMsgPage/>}/>
                </Routes>

            </div>


        </BrowserRouter>
    );
}

export default App;
