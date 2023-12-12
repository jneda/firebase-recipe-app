import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useUser } from "./hooks/useUser.ts";
import { AuthContext } from "./contexts/AuthContext.tsx";
import AppLayout from "./components/AppLayout.tsx";
import AppError from "./components/AppError.tsx";
import MyRecipes from "./pages/MyRecipes.tsx";
import CreateRecipe from "./pages/CreateRecipe.tsx";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <MyRecipes />,
      },
      {
        path: "recipes/create",
        element: <CreateRecipe />,
      },
    ],
    errorElement: (
      <AppLayout>
        <AppError />
      </AppLayout>
    ),
  },
]);

function App() {
  const { user } = useUser();
  console.log({ user });
  return (
    <AuthContext.Provider value={user}>
      <RouterProvider router={router} />
    </AuthContext.Provider>
  );
}

export default App;
