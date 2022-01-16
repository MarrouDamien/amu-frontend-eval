import React, { useEffect, useState } from "react";
import { loadCustomerFromApi } from "../api/http";
import { useParams } from "react-router-dom";
import CustomerDetail from "../widgets/CustomerDetail";
import { useNavigate } from "react-router-dom";
const CustomerDetailsPage = () => {
    const [customer, setCustomer] = useState([]);
    const params = useParams();
    const id = +params.id;
    const navigate = useNavigate();
    useEffect(() => {
        loadCustomerFromApi(id)
            .then(customer => setCustomer(customer));
    }, [])


    const redirectToInvoiceCreatePage = (event) => {
        event.preventDefault();
        navigate("/" + customer.id + "/invoices/add");
    }

    const redirectToCustomerListPage = (event) => {
        event.preventDefault();
        navigate("/");
    }

    return customer ? <>

        <CustomerDetail customer={customer}></CustomerDetail>
        <button onClick={redirectToInvoiceCreatePage}>Créer une facture</button>
        <button onClick={redirectToCustomerListPage}>Retour aux clients</button>

    </> : <>
        <p>Chargement en cours</p>
        <button onClick={redirectToCustomerListPage}>Retour aux clients</button>
    </>
}

export default CustomerDetailsPage;