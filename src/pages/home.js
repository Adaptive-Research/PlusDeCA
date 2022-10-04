import React from "react";
import {Footer, SampleCard, Sidebar,HTML2React} from "../components";
import { useState, useEffect } from "react";

import Table from 'react-bootstrap/Table';
import './home.css';








export default function HomePage() {
    {/*const [isLoading, setLoading] = useState(false);*/}
    const [data, setData] = useState(null);
    const [DebugString, setDebugString] = useState(null) ;


    useEffect(() => {
        {/*setLoading(true);*/}

        const fetchData = async () => {
            const response = await fetch('http://API.test:8001/API/Show-Compte-Utilisateur') ;
            const newData = await response.json();
            setData(newData);
            setDebugString(JSON.stringify(data, null, 2));
            {/*setLoading(false);*/}
        };
      
        fetchData();
    },data) ;


    
    if (data) {

        return (
            <div className="content-container">
                
                <div className="row"> 

                    <div className="left-panel box">
                        <Sidebar />
                    </div>

                    <div className="middle-panel box">
                        <div  style={{padding: "1%" }}>
                            <Table striped bordered hover style={{color:"red"}}>
                                <thead>
                                    <tr>
                                        <td>id</td>
                                        <td>Email</td>
                                        <td>Email validated ?</td>
                                    </tr> 
                                </thead>   

                                <tbody>
                                { data.map((item, key) =>
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.Email}</td>
                                        <td>{item.Email_validated}</td>
                                    </tr>    
                                )}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>

               
                <Footer/>
            </div> );

      } else {
        return <div>pas de data </div>;
      }


      
   
   

}
