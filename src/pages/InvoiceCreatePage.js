import React from "react";
import CreateInvoiceForm from "../widgets/CreateInvoiceForm";
import { useNavigate } from "react-router-dom";
import {  useParams } from "react-router-dom";

const InvoiceCreatePage =()=>{
    const params = useParams();
    const id = +params.id;
    const navigate = useNavigate();
    const redirectToCustomerListPage = (event) => {
        event.preventDefault();
        navigate("/"+id);
    }
    return <>
            <h1>Créer une facture</h1>
            <CreateInvoiceForm></CreateInvoiceForm>
            <button onClick={redirectToCustomerListPage}>Retour au client</button>
    </>
}
export default InvoiceCreatePage;