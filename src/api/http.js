const SUPABASE_URL = "https://pewrlzqojhfvwvsfluri.supabase.co/rest/v1";
const SUPABASE_API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MTgyMzYzMywiZXhwIjoxOTU3Mzk5NjMzfQ.EEGfZceJhWH6wCVD56c9IHiY_jeVb2tNNThCQiOjclI";


export const loadCustomersFromApi = ()=>{
    return fetch(`${SUPABASE_URL}/customers?order=created_at`, {
        headers: {
            apiKey: SUPABASE_API_KEY,
        },
    }).then((response) => response.json())
}