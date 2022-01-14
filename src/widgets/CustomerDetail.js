import React from "react";

const CustomerDetail = (props) => {
    console.log(props.customer)
    return <> 
        <h1>Fiche de {props.customer.fullName}</h1>
        <h3>({props.customer.email})</h3>
    </>
}

export default CustomerDetail