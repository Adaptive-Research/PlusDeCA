import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form} from 'react-bootstrap';
import {Link} from "react-router-dom";
import {checkEmail, getAllUsersEmail, toLog} from "../../../utils";
import {StatusMsg} from "../../status";
import axios from "axios";

export function Enterprise() {
    const [redStyle, setRedStyle] = useState("");
    const [nameMsg, setNameMsg] = useState("");
    const [websiteMsg, setWebsiteMsg] = useState("");
    const [siretMsg, setSiretMsg] = useState("");
    const [emailMsg, setEmailMsg] = useState("");
    const [telMsg, setTelMsg] = useState("");
    const [name, setName] = useState("");
    const [website, setWebsite] = useState("");
    const [siret, setSiret] = useState("");
    const [email, setEmail] = useState("");
    const [tel, setTel] = useState("");
    const [statusResponse, setStatus] = React.useState("");
    const [statusColor, setColor] = React.useState("");


    getAllUsersEmail();
    const storedToken = JSON.parse(localStorage.getItem('token'));


    const SaveEnterprise = async () => {
        // Launch a post request to check if user inputs are corrects and store the given token to create enterprise
        const url = process.env.REACT_APP_API_CREATE_ENTERPRISE_URL;
        const response = await axios.post(url, {
            token: storedToken,
            Submit: 1,
            Nom: name,
            SiteWeb: website,
            Siret: siret,
            Email: email,
            Telephone: tel
        }, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        })

        if (response.data.includes("ERROR:")) {
            console.log(`Error: ${response.data}`);
            setRedStyle("red");
            setColor("alert alert-danger");
            setStatus(`${response.data}`)
        } else {
            console.log("enterprise added");
            setColor("alert alert-success");
            setStatus("Enterprise added");
        }
    }


    

    const basicCheck = (name, website, siret, email, telephone) => {
        let nameCheck, websiteCheck, siretCheck, mailCheck, telCheck, check;
        if (name.length === 0) {
            nameCheck = false;
            setNameMsg("Name field is required")
        } else {
            nameCheck = true;
            setNameMsg("")
        }



        if (siret.length === 0) {
            siretCheck = false;
            setSiretMsg("Siret field is required")
        } else {
            siretCheck = true;
            setSiretMsg("");
        }



        if (nameCheck && siretCheck) {
            SaveEnterprise();
        }


    }

    const handleSubmit = () => {
        // Check if email and password are valid then launch request
        try {
            basicCheck(name, website, siret, email, tel);
        } catch (e) {
            console.log(e);
        } finally {
            console.log("test done");
        }
    }


    return (
        <div className="container-fluid">
            <div className="row">
                <h6>{storedToken}</h6>
                <StatusMsg color={statusColor} message={statusResponse}/>
                <Form className="mt-5 mx-auto col-md-4 shadow" style={{backgroundColor: "#D9D9D9"}}>
                    <h4 className="text-center fw-semibold mt-3 mb-3" style={{cursor: "Pointer"}}
                        onClick={toLog}>PlusDeCA</h4>

                    <Form.Group controlId="formBasicSiret" className="mt-3">
                        <Form.Label>Siret</Form.Label>
                        <Form.Control type="text" placeholder="Enter siret"
                                      onChange={(e) => setSiret(e.target.value)}/>
                        <Form.Text className={"text-muted text-justify " + redStyle}>
                            {siretMsg}
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicName" className="mt-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name"
                                      onChange={(e) => setName(e.target.value)}/>
                        <Form.Text className={"text-muted text-justify " + redStyle}>
                            {nameMsg}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicWebsite" className="mt-3">
                        <Form.Label>Website</Form.Label>
                        <Form.Control type="url" placeholder="Enter url"
                                      onChange={(e) => setWebsite(e.target.value)}/>
                        <Form.Text className={"text-muted text-justify " + redStyle}>
                            {websiteMsg}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail" className="mt-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"
                                      onChange={(e) => setEmail(e.target.value)}/>
                        <Form.Text className={"text-muted text-justify " + redStyle}>
                            {emailMsg}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicTelephone" className="mt-3">
                        <Form.Label>Telephone</Form.Label>
                        <Form.Control type="tel" placeholder="Enter phone number"
                                      onChange={(e) => setTel(e.target.value)}/>
                        <Form.Text className={"text-muted text-justify " + redStyle}>
                            {telMsg}
                        </Form.Text>
                    </Form.Group>
                    <Button className="mt-3 mb-3" variant="secondary" size="lg" onClick={() => {
                        handleSubmit()
                    }}>
                        Create
                    </Button>
                    <Link className="d-block mt-3 mb-3 text-decoration-none" to="/dashboard">Abort</Link>
                </Form>
            </div>
        </div>
    )
}