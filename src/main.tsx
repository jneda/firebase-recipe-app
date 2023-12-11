import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { initializeFirebase } from "./firebase.ts";
import App from "./App.tsx";
import AppLayout from "./components/AppLayout.tsx";
import AppError from "./components/AppError.tsx";

initializeFirebase();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <h2>My Recipes</h2>,
      },
      {
        path: "recipes/create",
        element: <h2>Add New Recipe</h2>,
      },
    ],
    errorElement: (
      <AppLayout>
        <AppError />
      </AppLayout>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
