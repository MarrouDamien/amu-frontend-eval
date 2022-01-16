import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {  useParams } from "react-router-dom";

import {  createInvoice } from "../api/http";

const InvoiceCreateForm = (props) => {

    const params = useParams();
    const id = +params.id;
    const [state, setState] = useState({ amount: "", status: "SENT" ,customer_id:id});

    
    const navigate = useNavigate();

    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(state);
        createInvoice(state).then(() => navigate("/"+id));
    }

    return <>
        <form id="createInvoice" onSubmit={handleSubmit}>
            <input
                type="number"
                name="amount"
                placeholder="Montant de la facture"
                value={state.amount}
                onChange={handleChange}
            />
            <select name="status" onChange={handleChange}>
                <option value="SENT">Envoyée</option>
                <option value="PAID">Payée</option>
            </select>
            <button type="submit" form="createInvoice">Enregistrer la facture</button>
        </form>
    </>


}
export default InvoiceCreateForm
