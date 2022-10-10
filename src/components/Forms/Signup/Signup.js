import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form} from 'react-bootstrap';
import {Link} from "react-router-dom";
import axios from "axios";
import {StatusMsg} from "../../status";
import {checkDuplicate, checkEmail, getAllUsersEmail} from "../../../utils";
import {encrypt} from "../../../encrypt";

export function Signup() {
    const [statusResponse, setStatus] = React.useState("");
    const [statusColor, setColor] = React.useState("");
    const [redStyle, setRedStyle] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [emailMsg, setEmailMsg] = React.useState("");
    const [passwordMsg, setPasswordMsg] = React.useState("");
    const toLog = () => {
        window.location.href = "https://plusdeca.fr";
    }


    getAllUsersEmail();

    const checkCreate = async (mail, pass) => {
        // Launch a post request to check if user inputs are corrects and store the given token to create user
        const url = process.env.API_SIGNUP_URL ;
        if (checkEmail(mail)) {
            const response = await axios.post(url, {
                Submit: 1,
                Email: mail,
                Password: encrypt(pass)
            }, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            });

            if (response.data.includes("ERROR:")) {
                setRedStyle("red");
                setEmailMsg("Wrong email or password");
                setPasswordMsg("Wrong email or password");
                setColor("alert alert-danger");
                setStatus(`${response.data}`);

            } else {
                console.log("User created");
                console.log(response.data);
                setColor("alert alert-success");
                setStatus("User account created");

            }

        }

    }


    const basicRegister = (email, password) => {
        let checkMail;
        let checkPass;

        if (!checkEmail(email)) {
            setEmailMsg("Email is required and must be valid");
            checkMail = false;
        } else if (email.length !== 0 && checkEmail(email) && !checkDuplicate(email)) {
            setEmailMsg("");
            checkMail = true;
        } else if (checkDuplicate(email)) {
            setEmailMsg("Email is already used");
            checkMail = false;
        }
        if (password.length < 8) {
            setPasswordMsg("Password must be at least 8 characters long");
            checkPass = false;
        } else {
            setPasswordMsg("");
            checkPass = true;
        }

        if (checkMail && checkPass) {
            checkCreate(email, password);
        }
    }


    const handleSubmit = () => {
        try {
            basicRegister(email, password);
        } catch (e) {
            console.log(e);
        } finally {
            console.log(email, password);
        }
    }


    return (
        <div className="container-fluid">
            <div className="row">
                <StatusMsg color={statusColor} message={statusResponse}/>
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
