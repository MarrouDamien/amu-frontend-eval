import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { loadCustomerInvoicesFromApi } from "../api/http";


const CustomerDetail = (props) => {
    const [state, setState] = useState([]);
    const params = useParams();
    const id = +params.id;

    useEffect(() => {
        let isMounted = true;
        loadCustomerInvoicesFromApi(id)
            .then((items) => {
                if (isMounted) {
                    setState(items);
                }
            });
        return () => { isMounted = false }
    }), [];

    return id ? <>
        <h1 className="title" >Fiche de {props.customer.fullName}</h1>
        <h5>({props.customer.email})</h5>
        <h4>Factures</h4>
        <table>
            <thead className="thead">
                <tr>
                    <th>Montant</th>
                    <th>Statut</th>
                </tr>
            </thead>
            <tbody>
                {state.map(item =>
                    <tr key={item.id}>
                        <td>{item.amount} €</td>
                        <td>{item.status === "SENT" ? "Envoyée" : "Transmise"}</td>
                    </tr>
                )}
            </tbody>
        </table>
    </> : <p>chargement</p>
}
export default CustomerDetail