import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form} from 'react-bootstrap';
import {Link} from "react-router-dom";
import {useLocation, useNavigate} from "react-router";

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

    const handleSubmit = () => {
        try {
            if (firstname.length === 0 || lastname.length === 0 || username.length === 0 || email.length === 0 || password.length === 0) {
                setRedStyle("text-danger");

                if (email.length === 0) {
                    setEmailMsg("Email is required");
                } else if (email.length !== 0) {
                    setEmailMsg("");
                }
                if (password.length === 0) {
                    setPasswordMsg("Password is required");
                } else if (password.length !== 0) {
                    setPasswordMsg("");
                }
            } else {
                navigate('/dashboard')
            }
        } catch (e) {
            console.log(e);
        } finally {
            console.log(firstname, lastname, username, email, password);
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