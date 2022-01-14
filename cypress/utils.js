// L'URL sur laquelle votre application web est visitable (à changer si nécessaire)
export const BASE_URL = "http://127.0.0.1:8080/";
// L'URL de l'API Supabase à mettre à jour absolument
export const API_URL = "https://pewrlzqojhfvwvsfluri.supabase.co/rest/v1";
// La clé d'API de votre compte Supabase à mettre à jour absolument
export const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MTgyMzYzMywiZXhwIjoxOTU3Mzk5NjMzfQ.EEGfZceJhWH6wCVD56c9IHiY_jeVb2tNNThCQiOjclI";

/**
 * Petite fonction utilitaire qui permet de supprimer tout ce qui se trouve dans les tables customers et invoices
 * de l'API SupaBase
 */
export const resetDatabase = () => {
  cy.request({
    method: "DELETE",
    url: API_URL + "/invoices",
    headers: {
      apiKey: API_KEY,
    },
  });

  cy.request({
    method: "DELETE",
    url: API_URL + "/customers",
    headers: {
      apiKey: API_KEY,
    },
  });
};
