import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import Lists from "./pages/Lists";
import Error from "./components/Error";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <Error />,

      children: [
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/",
          element: <AppLayout />,
        },
        {
          path: "/lists",
          element: <Lists />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
