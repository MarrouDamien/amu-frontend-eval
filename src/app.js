// src/app.js

// React va permettre de dessiner notre arbre d'éléments HTML
import React from "react";
// ReactDOM va permettre de créer le rendu correspondant dans le DOM HTML
import ReactDOM from "react-dom";

// BrowserRouter permet de fournir à tous les composants qu'il contient des outils relatifs au routage
// Routes permet de décrire la configuration des routes
// Route permet de décrire la configuration d'une route (url => composant à afficher)
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomerDetailsPage from "./pages/CustomerDetailsPage";
import CustomerListPage from "./pages/CustomerListPage";
import CustomerCreatePage from "./pages/CustomerCreatePage";
import InvoiceCreatePage from "./pages/InvoiceCreatePage";


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
                element={<InvoiceCreatePage/>}
            />
            <Route
                path="/"
                element={<CustomerListPage />}
            />
        </Routes>
    </BrowserRouter>
}
ReactDOM.render(<App />, document.querySelector('main'));
///TODO changer les bouton link avec des event listener