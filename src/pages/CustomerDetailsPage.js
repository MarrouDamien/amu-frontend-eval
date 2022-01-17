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
        let isMounted = true;
        loadCustomerFromApi(id)
            .then(customer => {
                if (isMounted) setCustomer(customer);
            })
        return () => { isMounted = false; }
    }, [])


    const redirectToInvoiceCreatePage = (event) => {
        event.preventDefault();
        navigate("/" + id + "/invoices/add");
    }

    const redirectToCustomerListPage = (event) => {
        event.preventDefault();
        navigate("/");
    }

    return customer ? <>
        <CustomerDetail customer={customer}></CustomerDetail>
        <button className="btn" onClick={redirectToInvoiceCreatePage}>Créer une facture</button>
        <button className="btn" onClick={redirectToCustomerListPage}>Retour aux clients</button>
    </> : <>
        <p>Chargement en cours</p>
        <button className="btn" onClick={redirectToCustomerListPage}>Retour aux clients</button>
    </>
}

export default CustomerDetailsPage;