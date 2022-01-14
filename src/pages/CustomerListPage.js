import React, { useEffect, useState } from "react";
import { loadCustomersFromApi } from "../api/http";
import CustomerList from "../widgets/CustomerList";

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
        <button id="create" href="/create" >Créer un client</button>
        <CustomerList customers={state}></CustomerList>
    </>
}
export default CustomerListPage;