import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { createCustomer } from "../api/http";


const CustomerCreateForm = () => {

    const [state, setState] = useState({ fullName: "", email: "" });
    const navigate = useNavigate();

    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(state);
        createCustomer(state).then(()=>navigate("/"));

    }

    return <>
        <form id="createCustomer" onSubmit={handleSubmit}>
            <input
                type="text"
                name="fullName"
                placeholder="Nom complet"
                value={state.fullName}
                onChange={handleChange}
            />
            <input
                type="email"
                name="email"
                placeholder="email"
                value={state.email}
                onChange={handleChange}
            />
            <button className="btn" type="submit" form="createCustomer">Enregistrer</button>
        </form>
    </>
}
export default CustomerCreateForm