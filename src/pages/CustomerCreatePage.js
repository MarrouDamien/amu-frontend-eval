import React from "react";
import CreateCustomerForm from "../widgets/CreateCustomerForm";
import { useNavigate } from "react-router-dom";
const CustomerCreatePage =()=>{
    const navigate = useNavigate();
    const redirectToCustomerListPage = (event) => {
        event.preventDefault();
        navigate("/");
    }

    return <>
            <h1>Créer un client</h1>
            <CreateCustomerForm></CreateCustomerForm>
            <button onClick={redirectToCustomerListPage}>Retour aux clients</button> 
    </>
}
export default CustomerCreatePage;