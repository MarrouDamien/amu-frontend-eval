import React, { useEffect, useState } from "react";
import { loadCustomerInvoicesFromApi } from "../api/http";
import { useParams } from "react-router-dom";
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

    return <>
        <h1 className="title" >Fiche de {props.customer.fullName}</h1>
        <h5>({props.customer.email})</h5>
        <h4>Factures</h4>
        <table>
            <thead className="thead"  >
                <th>Montant</th>
                <th>Statut</th>

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
    </>
}

export default CustomerDetail