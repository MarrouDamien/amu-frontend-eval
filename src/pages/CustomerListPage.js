import React, { useEffect, useState } from "react";
import { loadCustomersFromApi } from "../api/http";
import CustomerList from "../widgets/CustomerList";
import { Link } from "react-router-dom";

const CustomerListPage = () => {
    const [state, setState] = useState([]);
    useEffect(() => {
        loadCustomersFromApi()
            .then((items) => {
                setState(items);
            });
    }, []);

    return <>
    <h1>Liste des clients</h1>
        <button id="create"><Link to={"/create"}>Créer un client</Link></button>
        <CustomerList customers={state}></CustomerList>
    </>
}
export default CustomerListPage;