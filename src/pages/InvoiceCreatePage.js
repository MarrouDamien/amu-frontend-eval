import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import CreateInvoiceForm from "../widgets/CreateInvoiceForm";


const InvoiceCreatePage = () => {
    const params = useParams();
    const id = +params.id;
    const navigate = useNavigate();

    const redirectToCustomerListPage = (event) => {
        event.preventDefault();
        navigate("/" + id);
    }

    return <>
        <h1 className="title" >Créer une facture</h1>
        <CreateInvoiceForm></CreateInvoiceForm>
        <button className="btn" onClick={redirectToCustomerListPage}>Retour au client</button>
    </>
}
export default InvoiceCreatePage;