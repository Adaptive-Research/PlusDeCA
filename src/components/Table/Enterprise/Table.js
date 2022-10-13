import Table from 'react-bootstrap/Table';
import {TableRow} from "../Row";
import {getEnterprisesByUser, getUserId} from "../../../utils";
import {useState} from "react";

export function EnterpriseTable() {

    getEnterprisesByUser();
    const userEnterprises = JSON.parse(localStorage.getItem('userEnterprises'));

    const [enterprises, setEnterprises] = useState(userEnterprises);

    const getRows = () => {
        return enterprises.map((enterprise, index) => {
            return (
                <TableRow key={index}>
                    <td>{enterprise.NomEntreprise}</td>
                    <td>{enterprise.id}</td>
                </TableRow>
            )
        })
    }

    return (

        <Table striped bordered hover>
            <thead>
            <tr>
                <th>#</th>
                <th>id_enterprise</th>
                <th>name</th>
                <th>update</th>
                <th>delete</th>
            </tr>
            </thead>
            <tbody>
            {getRows()}
            </tbody>
        </Table>

    );
}
