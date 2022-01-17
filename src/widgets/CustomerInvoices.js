import React from 'react';

const CustomerInvoices =(props) =>{
    return <table>
        <thead className="thead">
            <tr>
                <th>Montant</th>
                <th>Statut</th>
            </tr>
        </thead>
        <tbody>
            {props.invoices.map(item => <tr key={item.id}>
                <td>{item.amount} €</td>
                <td>{item.status === "SENT" ? "Envoyée" : "Payée"}</td>
            </tr>
            )}
        </tbody>
    </table>;
}
export default CustomerInvoices;