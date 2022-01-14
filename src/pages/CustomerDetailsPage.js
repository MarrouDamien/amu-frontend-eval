import React, { useEffect, useState } from "react";
 import { loadCustomerFromApi } from "../api/http";
import { Link, useParams } from "react-router-dom";
import CustomerDetail from "../widgets/CustomerDetail";

const CustomerDetailsPage = () => {
    const [customer, setCustomer] = useState(null);
    const params = useParams();
    const id = +params.id;

    useEffect(() => {
        loadCustomerFromApi(id)
            .then(customer => setCustomer(customer));
    }, [id])

    return customer ? <>

        <CustomerDetail customer={customer}></CustomerDetail>
        <button><Link to={"/"+customer.id+"/invoices/add"}>Créer une facture</Link></button>
        <button><Link to={"/"}>Retour aux clients</Link></button>

    </> : <>
        <p>Chargement en cours</p>
        <button><Link to={"/"}>Retour aux clients</Link></button>
    </>
}

export default CustomerDetailsPage;