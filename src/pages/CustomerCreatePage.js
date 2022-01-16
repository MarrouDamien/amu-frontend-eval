import React from "react";
import CreateCustomerForm from "../widgets/CreateCustomerForm";
import { useNavigate } from "react-router-dom";
import myStyle from "../style/style.css"
const CustomerCreatePage =()=>{
    const navigate = useNavigate();
    const redirectToCustomerListPage = (event) => {
        event.preventDefault();
        navigate("/");
    }

    return <>
            <h1 className="title" >Créer un client</h1>
            <CreateCustomerForm></CreateCustomerForm>
            <button className="btn"  onClick={redirectToCustomerListPage}>Retour aux clients</button> 
    </>
}
export default CustomerCreatePage;