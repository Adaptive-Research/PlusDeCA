import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form} from 'react-bootstrap';
import {Link} from "react-router-dom";
import {useLocation, useNavigate} from "react-router";
import axios from "axios";

export function Signup() {
    const [redStyle, setRedStyle] = React.useState("");
    const [firstname, setFirstname] = React.useState("");
    const [lastname, setLastname] = React.useState("");
    const [username, setUsername] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
 const [emailMsg, setEmailMsg] = React.useState("We'll never share your email with anyone else.");
    const [passwordMsg, setPasswordMsg] = React.useState("We'll never share your password with anyone else.");
    const navigate = useNavigate();
    const toLog = () => {
       window.location.href = "https://plusdeca.fr";
    }

    const checkEmail = (mail) => {
        let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (validRegex.test(mail)) {
            return true;
        }
        return false;
    }

    const checkCreate = (mail, pass) => {
        {/*launch a post request to check if user inputs are correects and store the given token to create user*/
        }
        const url = "http://78.249.128.56:8001/API/Creer-Compte-Utilisateur";
        axios.post(url, {
            Submit: 1,
            Email: mail,
            Password: pass
        }, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        }).then(
            (response) => {
                console.log(response.data);
                if ((response.data === "ERROR: User already created") ||
                    (response.data === "ERROR: User Not saved") ||
                    (response.data === "ERROR: Submit not found") ||
                    (response.data === "Connection failed")) {
                    setRedStyle("red");
                    setEmailMsg("Wrong email or password");
                    setPasswordMsg("Wrong email or password");
                } else {
                    console.log("User created");
                    navigate("/dashboard");
                }
            }
        ).catch(
            (error) => {
                console.log(error);
                setRedStyle("red");
                setEmailMsg("Email or password is incorrect");
                setPasswordMsg("Email or password is incorrect");
            });
    }

    const handleSubmit = () => {
        try {
            if (email.length === 0 || password.length === 0) {
                setRedStyle("text-danger");

                if (email.length === 0) {
                    setEmailMsg("Email is required");
                }else if (!checkEmail(email)) {
                    setEmailMsg("Email is not valid");
                }
                else if (email.length !== 0) {
                    setEmailMsg("");
                }
                if (password.length === 0) {
                    setPasswordMsg("Password is required");
                } else if (password.length !== 0) {
                    setPasswordMsg("");
                }
            } else {
                checkCreate(email, password);
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
                <Form className="mx-auto col-md-4 shadow"
                      style={{backgroundColor: "#D9D9D9", marginTop: "100px", marginBottom: "100px"}}>
                    <h4 className="text-center fw-semibold mt-3 mb-3" style={{cursor: "Pointer"}}
                        onClick={toLog}>PlusDeCA</h4>


                    <Form.Group controlId="formBasicEmail" className="mt-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"
                                      onChange={(e) => setEmail(e.target.value)}/>
                        <Form.Text className={"text-muted text-justify " + redStyle}>
                            {emailMsg}
                        </Form.Text>

                    </Form.Group>
                    <Form.Group controlId="formBasicPassword" className="mt-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password"
                                      onChange={(e) => setPassword(e.target.value)}/>
                        <Form.Text className={"text-muted text-justify " + redStyle}>
                            {passwordMsg}
                        </Form.Text>
                    </Form.Group>
                    <Button className="mt-3 mb-3" variant="secondary" size="lg" onClick={handleSubmit}>
                        Signup
                    </Button>
                    <Link className="d-block mt-3 mb-3 text-decoration-none" to="/">Login here</Link>
                </Form>
            </div>
        </div>
    )
}