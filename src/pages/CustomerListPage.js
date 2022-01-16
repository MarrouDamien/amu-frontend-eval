import React, { useEffect, useState } from "react";
import { loadCustomersFromApi } from "../api/http";
import CustomerList from "../widgets/CustomerList";
import { useNavigate } from "react-router-dom";
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
    <h1>Liste des clients</h1>
        <button id="create" onClick={redirectToCustomerCreatePage}>Créer un client</button>
        <CustomerList customers={state}></CustomerList>
    </>
}
export default CustomerListPage;