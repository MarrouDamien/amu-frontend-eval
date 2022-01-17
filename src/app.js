import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CustomerListPage from "./pages/CustomerListPage";
import CustomerDetailsPage from "./pages/CustomerDetailsPage";
import CustomerCreatePage from "./pages/CustomerCreatePage";
import InvoiceCreatePage from "./pages/InvoiceCreatePage";
import  "./style/style.css"


const App = () => {
    return <BrowserRouter>
        <Routes>
            <Route
                path="/create"
                element={<CustomerCreatePage />}
            />
            <Route
                path="/:id"
                element={<CustomerDetailsPage />}
            />
            <Route
                path="/:id/invoices/add"
                element={<InvoiceCreatePage />}
            />
            <Route
                path="/"
                element={<CustomerListPage />}
            />
        </Routes>
    </BrowserRouter>
}
ReactDOM.render(<App />, document.querySelector('main'));