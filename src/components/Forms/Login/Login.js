import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form} from 'react-bootstrap';
import {Link} from "react-router-dom";
import {useNavigate} from "react-router";
import axios from 'axios';
import {checkEmail} from "../../../utils";

export function Login() {
    let [token, setToken] = useState([]);
    const [redStyle, setRedStyle] = useState("");
    const [UsrMsg, setUsrMsg] = useState("We'll never share your email with anyone else.");
    const [passMsg, setPassMsg] = useState("We'll never share your password with anyone else.");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const toLog = () => {
        window.location.href = "https://plusdeca.fr";
    }


    const checkAUth = async (mail, pass) => {
        // Launch a post request to check if user inputs are correects and store the given token to create user
        const url = "http://78.249.128.56:8001/API/Login";

        if (checkEmail(mail)) {
            const response = await axios.post(url, {
                Submit: 1,
                Email: mail,
                Password: pass
            }, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            })

            if (response.data.includes("ERROR:")) {
                console.log("Error found");
                setRedStyle("red");
                setUsrMsg("Wrong email or password");
                setPassMsg("Wrong email or password");
            } else {
                console.log("User authenticated");

                try {
                    let temp = response.data
                    setToken(elem => [token.push(temp)]);
                    localStorage.setItem('token', JSON.stringify(temp));
                } catch (e) {
                    console.log(e);
                } finally {
                    navigate('/dashboard');
                }
            }
        }


    }

    const handleSubmit = () => {
        // Check if email and password are valid then launch request
        try {
            console.log(email, password);
            if (email.length === 0 || password.length === 0) {
                setRedStyle("text-danger");
                if (email.length === 0) {
                    setUsrMsg("Email is required");
                } else if (!checkEmail(email)) {
                    setUsrMsg("Email is not valid");
                } else if (email.length !== 0) {
                    setUsrMsg("We'll never share your email with anyone else.");
                }
                if (password.length === 0) {
                    setPassMsg("Password is required");
                } else if (password.length !== 0) {
                    setPassMsg("We'll never share your password with anyone else.");
                }
            } else {
                checkAUth(email, password);
            }
        } catch (e) {
            console.log(e);
        } finally {
            console.log(email, password);
        }
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <Form className="mt-5 mx-auto col-md-4 shadow" style={{backgroundColor: "#D9D9D9"}}>
                    <h4 className="text-center fw-semibold mt-3 mb-3" style={{cursor: "Pointer"}}
                        onClick={toLog}>PlusDeCA</h4>
                    <Form.Group controlId="formBasicEmail" className="mt-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"
                                      onChange={(e) => setEmail(e.target.value)}/>
                        <Form.Text className={"text-muted text-justify " + redStyle}>
                            {UsrMsg}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword" className="mt-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password"
                                      onChange={(e) => setPassword(e.target.value)}/>
                        <Form.Text id="WarningText" className={"text-muted text-justify " + redStyle}>
                            {passMsg}
                        </Form.Text>
                    </Form.Group>
                    <Button className="mt-3 mb-3" variant="secondary" size="lg" onClick={() => {
                        handleSubmit()
                    }}>
                        Login
                    </Button>
                    <Link className="d-block mt-3 mb-3 text-decoration-none" to="/signup">Signup here</Link>
                    <Link className="d-block mt-3 mb-3 text-decoration-none" to="/reset">Forgot
                        password?</Link>
                </Form>
            </div>
        </div>
    )
}