import React from "react";
import { Link } from "react-router-dom";


const CustomerList = (props) => {
    return <table>
        <thead className="thead"  >
            <tr>
                <th>Nom complet</th>
                <th>Adresse mail</th>
            </tr>
        </thead>
        <tbody>
            {props.customers.map(item =>
                <tr key={item.id}>
                    <td><Link className="link" to={"/" + item.id}>{item.fullName}</Link></td>
                    <td>{item.email}</td>
                </tr>
            )}
        </tbody>
    </table>
}
export default CustomerList