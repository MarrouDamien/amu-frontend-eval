import React, { useEffect, useState } from "react";
import { loadCustomerInvoicesFromApi } from "../api/http";
import {  useParams } from "react-router-dom";
const CustomerDetail = (props) => {

    const [state, setState] = useState([]);

    const params = useParams();
    const id = +params.id;


    useEffect(() => {
        loadCustomerInvoicesFromApi(id)
            .then((items) => {
                setState(items);
            });
    }),[];

    return <> 
        <h1>Fiche de {props.customer.fullName}</h1>
        <h3>({props.customer.email})</h3>
        <table>
        <thead>
        </thead>
        <tbody>
        {state.map(item =>
            <tr key={item.id}>
                <td>{item.amount}</td>
                <td>{item.status}</td>
            </tr>
        )}
        </tbody>
    </table>
    </>
}

export default CustomerDetail