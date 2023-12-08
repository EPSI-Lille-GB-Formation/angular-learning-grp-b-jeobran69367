import { Todo } from "./todos";  // Assurez-vous d'utiliser les guillemets simples ou doubles autour du chemin

export const TODOS: Todo[] = [
    {
        id: 1,
        title: "Todo 1",  // Ajout des guillemets autour de la valeur de la propriété title
        content: "Content todo 1",
        author: "John Doe",
        isComplete: false,  // Correction de la propriété isCompleted à isComplete
        createdAt: new Date(),
        completedAt: null,
    },
    {
        id: 2,  // Remplacement de X par une valeur numérique, par exemple 2
        title: "Todo X",
        content: "Content todo X",
        author: "John Doe",
        isComplete: false,
        createdAt: new Date(),
        completedAt: null,
    },
];
