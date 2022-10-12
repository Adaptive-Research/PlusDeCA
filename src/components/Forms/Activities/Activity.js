import {StatusMsg} from "../../status";
import {Button, Form} from "react-bootstrap";
import {Link} from "react-router-dom";
import React, {useState} from "react";
import {checkEmail, getUserId, toLog} from "../../../utils";
import axios from "axios";

export function Activity() {
    const [redStyle, setRedStyle] = useState("");
    const  [activity, setActivity] = useState("");
    const [activityMsg, setActivityMsg] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [website, setWebsite] = useState("");
    const [email, setEmail] = useState("");
    const [tel, setTel] = useState("");
    const [nameMsg, setNameMsg] = useState("");
    const [descriptionMsg, setDescriptionMsg] = useState("");
    const [websiteMsg, setWebsiteMsg] = useState("");
    const [telMsg, setTelMsg] = useState("");
    const [emailMsg, setEmailMsg] = useState("");
    const [statusResponse, setStatus] = React.useState("");
    const [statusColor, setColor] = React.useState("");


    const storedToken = JSON.parse(localStorage.getItem('token'));


    const checkActivity = async (mail) => {
        // Launch a post request to check if user inputs are corrects and store the given token to create enterprise
        const url = process.env.REACT_APP_API_CREATE_ACTIVITY_URL;
        if (checkEmail(mail)) {
            const url = process.env.REACT_APP_API_CREATE_ACTIVITY_URL;
            const response = await axios.post(url, {
                token: storedToken,
                Submit: 1,
                idEntreprise: getUserId(),
                TypeActivite: getUserId(),
                Nom: name,
                Description: description,
                SiteWeb: website,
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
                console.log("activity added");
                setColor("alert alert-success");
                setStatus("Activity added");
            }
        }
    }


    const basicCheck = (name, website, email, telephone) => {
        let nameCheck, webCheck, mailCheck, telCheck;
        if (name.length === 0) {
            setNameMsg("Name is required");
            nameCheck = false;
        } else {
            setNameMsg("");
            nameCheck = true;
        }

        if (website.length === 0) {
            setWebsiteMsg("Website is required");
            webCheck = false;
        } else {
            setWebsiteMsg("");
            webCheck = true;
        }

        if (email.length === 0) {
            mailCheck = false;
            setEmailMsg("Email field is required");
        } else if (!checkEmail(email)) {
            setEmailMsg("Email is not valid");
            mailCheck = false;
        } else {
            mailCheck = true;
            setEmailMsg("");
        }

        if (telephone.length === 0) {
            telCheck = false;
            setTelMsg("Telephone field is required");
        } else {
            telCheck = true;
            setTelMsg("");
        }

        if (nameCheck && webCheck && mailCheck && telCheck) {
            checkActivity(email);
        }
    }


    const handleSubmit = () => {
        try {
            basicCheck(name, website, email, tel);
        } catch (e) {
            console.log(e);
        } finally {
            console.log("Activity checked");
        }
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <h6>{storedToken}</h6>
                <StatusMsg color={statusColor} message={statusResponse}/>
                <Form className="mt-5 mx-auto col-md-4 shadow" style={{backgroundColor: "#D9D9D9"}}>
                    <h4 className="text-center fw-semibold mt-3 mb-3" style={{cursor: "Pointer"}}
                        onClick={toLog}>PlusDeCA</h4>
                    <Form.Group controlId="formBasicActivity" className="mt-3">
                        <Form.Label>Activity type</Form.Label>
                        <Form.Control type="text" placeholder="Enter activity type"
                                      onChange={(e) => setActivity(e.target.value)}/>
                        <Form.Text className={"text-muted text-justify " + redStyle}>
                            {activityMsg}
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