const SUPABASE_URL = "https://pewrlzqojhfvwvsfluri.supabase.co/rest/v1";
const SUPABASE_API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MTgyMzYzMywiZXhwIjoxOTU3Mzk5NjMzfQ.EEGfZceJhWH6wCVD56c9IHiY_jeVb2tNNThCQiOjclI";

/**
 * 
 * @returns an array of all custumers in database
 */
export const loadCustomersFromApi = () => {
    return fetch(`${SUPABASE_URL}/customers?order=created_at`, {
        headers: {
            apiKey: SUPABASE_API_KEY,
        },
    }).then((response) => response.json())
}

/**
 * 
 * @param {number} id the value of the customer id
 * @returns details of specified user (full name, email)
 */
export const loadCustomerFromApi = (id) => {
    return fetch(`${SUPABASE_URL}/customers?id=eq.${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            apiKey: SUPABASE_API_KEY,
            Prefer: "return=representation",
        }
    }).then((response) => response.json()).then(customer => customer[0])
}

/**
 * 
 * @param {json} customerData the json output of a form with full name an email
 * @returns json with data of the created customer
 */
export const createCustomer = (customerData) => {
    return fetch(`${SUPABASE_URL}/customers`, {
        method: "POST",
        body: JSON.stringify(customerData),
        headers: {
            "Content-Type": "application/json",
            apiKey: SUPABASE_API_KEY,
            Prefer: "return=representation",
        },
    }).then((response) => response.json())
}

/**
 * 
 * @param {json} invoiceData the json output of a form (amount, status, customer_id)
 * @returns json of the corresponding created invoice
 */
export const createInvoice = (invoiceData) => {
    return fetch(`${SUPABASE_URL}/invoices`, {
        method: "POST",
        body: JSON.stringify(invoiceData),
        headers: {
            "Content-Type": "application/json",
            apiKey: SUPABASE_API_KEY,
            Prefer: "return=representation",
        },
    }).then((response) => response.json())
}

/**
 * 
 * @param {number} id the id of a customer 
 * @returns the list of all invoices of a specific customer
 */
export const loadCustomerInvoicesFromApi = (id) => {
    return fetch(`${SUPABASE_URL}/invoices?customer_id=eq.${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            apiKey: SUPABASE_API_KEY,
            Prefer: "return=representation",
        }
    }).then((response) => response.json())
}