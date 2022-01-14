// src/app.js

// React va permettre de dessiner notre arbre d'éléments HTML
import React from "react";
// ReactDOM va permettre de créer le rendu correspondant dans le DOM HTML
import ReactDOM from "react-dom";

// On créé ici un tableau TODO_ITEMS qui contient deux objets 
const TODO_ITEMS = [
  { id: 1, text: "Faire les courses", done: false },
  { id: 2, text: "Aller chercher les enfants", done: true },
];

const TodoList = () => {
    // On retourne une list <ul> qui contient un tableau d'éléments React
    // Chaque objet de TODO_ITEMS sera transformé en un <li> contenant les détails de la tâche
    // Les éléments React générés par une boucle doivent avoir une "key" unique
    return <ul>
        {TODO_ITEMS.map(item => <li key={item.id}>
            <label>
                <input type="checkbox" id="todo-${item.id}" checked={item.done} />
                {item.text}
            </label>
        </li>)}
    </ul>
}

// Imprime l'arbre renvoyé par TodoList() dans l'élément <main> du DOM HTML
ReactDOM.render(<TodoList />, document.querySelector('main'));