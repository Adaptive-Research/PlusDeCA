import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form} from 'react-bootstrap';
import {Link} from "react-router-dom";
import axios from "axios";
import {checkDuplicate, checkEmail, getAllUsers} from "../../../utils";

export function Signup() {
    const [redStyle, setRedStyle] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [emailMsg, setEmailMsg] = React.useState("We'll never share your email with anyone else.");
    const [passwordMsg, setPasswordMsg] = React.useState("We'll never share your password with anyone else.");
    const toLog = () => {
        window.location.href = "https://plusdeca.fr";
    }

    getAllUsers();

    const checkCreate = async (mail, pass) => {
        // Launch a post request to check if user inputs are correects and store the given token to create user
        const url = "http://78.249.128.56:8001/API/Creer-Compte-Utilisateur";


        if (checkEmail(mail)) {
            const response = await axios.post(url, {
                Submit: 1,
                Email: mail,
                Password: pass
            }, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            });

            if (response.data.includes("ERROR:")) {
                setRedStyle("red");
                setEmailMsg("Wrong email or password");
                setPasswordMsg("Wrong email or password");
            } else {
                console.log("User created");
                console.log(response.data);
            }

        }

    }

    const handleSubmit = () => {
        try {
            if (email.length === 0 || password.length === 0) {
                setRedStyle("text-danger");

                if (!checkEmail(email)) {
                    setEmailMsg("Email is required and must be valid");
                } else if (email.length !== 0 && checkEmail(email)) {
                    const test = checkDuplicate(email);
                    if (test === true) {
                        setEmailMsg("Email is already used");
                    } else {
                        setEmailMsg("");
                    }
                }
                if (password.length < 8) {
                    setPasswordMsg("Password must be at least 8 characters long");
                } else if (password.length !== 0) {
                    setPasswordMsg("");
                }
            } else {
                // checkCreate(email, password).then(r => {
                //     console.log(r);
                // });
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
