import React, { useEffect, useState } from "react";import { loadCustomerFromApi } from "../api/http";
import { Link, useParams } from "react-router-dom";
import CustomerDetail from "../widgets/CustomerDetail";

const CustomerDetailsPage = ()=> {
    const [customer, setCustomer] = useState(null);
    const params = useParams();
    const id = +params.id;

    useEffect(() => {
        loadCustomerFromApi(id)
            .then(customer => setCustomer(customer));
    }, [id])

    return customer?<>
        
        <CustomerDetail customer={customer}></CustomerDetail>
        <button id="create" href="/create">Créer une facture</button>
    </>:
    <p>Chargement en cours</p>
}

export default CustomerDetailsPage;