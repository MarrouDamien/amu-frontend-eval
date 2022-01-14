const SUPABASE_URL = "https://pewrlzqojhfvwvsfluri.supabase.co/rest/v1";
const SUPABASE_API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MTgyMzYzMywiZXhwIjoxOTU3Mzk5NjMzfQ.EEGfZceJhWH6wCVD56c9IHiY_jeVb2tNNThCQiOjclI";


export const loadCustomersFromApi = ()=>{
    return fetch(`${SUPABASE_URL}/customers?order=created_at`, {
        headers: {
            apiKey: SUPABASE_API_KEY,
        },
    }).then((response) => response.json())
}

export const loadCustomerFromApi = (id)=>{
    return fetch(`${SUPABASE_URL}/customers?id=eq.${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            apiKey: SUPABASE_API_KEY,
            Prefer: "return=representation",
        }
    }).then((response) => response.json()).then(customer => customer[0])
}

export const createCustomer = (customerData)=>{
   return  fetch(`${SUPABASE_URL}/customers`, {
        method: "POST",
        body: JSON.stringify(customerData),
        headers: {
            "Content-Type": "application/json",
            apiKey: SUPABASE_API_KEY,
            Prefer: "return=representation",
        },
    }).then((response) => response.json())
}