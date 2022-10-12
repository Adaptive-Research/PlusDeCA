import Table from 'react-bootstrap/Table';
import {TableRow} from "../Row";
import {getUserId} from "../../../utils";
import axios from "axios";
import {useState} from "react";

export function EnterpriseTable() {

    const userId = getUserId();
    const enterpriseId = localStorage.getItem('userEnterprise');


    const [data, setData] = useState([enterpriseId]);


    return (

        <Table striped bordered hover>
            <thead>
            <tr>
                <th>#</th>
                <th>siret</th>
                <th>name</th>
                <th>website</th>
                <th>email</th>
                <th>telephone</th>
                <th>update</th>
                <th>delete</th>
            </tr>
            </thead>
            <tbody>
            {data.map((item, key) =>
                <TableRow ide={item.id}
                            siret={item.Siret}
                            name={item.Nom}
                            website={item.SiteWeb}
                            email={item.Email}
                          telephone={item.Telephone}
                />
            )}
            </tbody>
        </Table>

    );
}
