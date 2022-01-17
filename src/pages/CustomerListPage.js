import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import CustomerList from "../widgets/CustomerList";
import { loadCustomersFromApi } from "../api/http";


const CustomerListPage = () => {
    const [state, setState] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        loadCustomersFromApi()
            .then((items) => {
                setState(items);
            });
    }, []);

    const redirectToCustomerCreatePage = (event) => {
        event.preventDefault();
        navigate("/create");
    }

    return <>
        <h1 className="title" >Liste des clients</h1>
        <button className="btn" id="create" onClick={redirectToCustomerCreatePage}>Créer un client</button>
        <CustomerList customers={state}></CustomerList>
    </>
}
export default CustomerListPage;