import React, {useEffect, useState} from "react";
import {Footer, Sidebar} from "../components";

import Table from 'react-bootstrap/Table';
import './home.css';


export default function HomePage() {

    const [data, setData] = useState(null);
    const [DebugString, setDebugString] = useState(null);


    useEffect(() => {
        {/*setLoading(true);*/
        }

        const fetchData = async () => {
            const response = await fetch('http://78.249.128.56:8001/API/Show-Comptes-Utilisateur');
            const newData = await response.json();
            setData(newData);
            setDebugString(JSON.stringify(data, null, 2));
            {/*setLoading(false);*/
            }

        };

        fetchData();
    }, data);


    if (data && localStorage.getItem('logged') === "true") {
        return (
            <div className="content-container">
                <div className="row">

                    <div className="left-panel box">
                        <Sidebar/>
                    </div>

                    <div className="middle-panel box">
                        <div style={{padding: "1%"}}>
                            <Table striped bordered hover style={{color: "red"}}>
                                <thead>
                                <tr>
                                    <td>id</td>
                                    <td>Email</td>
                                    <td>Email verified ?</td>
                                </tr>
                                </thead>

                                <tbody>
                                {data.map((item, key) =>
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.Email}</td>
                                        <td>{item.Email_verified}</td>
                                    </tr>
                                )}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>


                <Footer/>
            </div>);

    } else {
        return <div>pas de data </div>;
    }


}
