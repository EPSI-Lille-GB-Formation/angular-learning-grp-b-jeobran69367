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
    {
        id: 2,
        title: "Shopping",
        content: "Buy groceries and household items",
        author: "Jane Doe",
        isComplete: false,
        createdAt: new Date(),
        completedAt: null,
      },
      {
        id: 3,
        title: "Exercise",
        content: "Go for a jog in the park",
        author: "Alice Johnson",
        isComplete: false,
        createdAt: new Date(),
        completedAt: null,
      },
      {
        id: 4,
        title: "Study",
        content: "Read a chapter from the science textbook",
        author: "Bob Smith",
        isComplete: false,
        createdAt: new Date(),
        completedAt: null,
      },
      {
        id: 5,
        title: "Work",
        content: "Complete the project report",
        author: "Chris Williams",
        isComplete: false,
        createdAt: new Date(),
        completedAt: null,
      },
      {
        id: 6,
        title: "Call Mom",
        content: "Check in and have a chat",
        author: "Eva Davis",
        isComplete: false,
        createdAt: new Date(),
        completedAt: null,
      },
      {
        id: 7,
        title: "Movie Night",
        content: "Watch a new release with friends",
        author: "Mike Anderson",
        isComplete: false,
        createdAt: new Date(),
        completedAt: null,
      },
];
