import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import Error from "./components/Error";
import Dashboard2 from "./pages/Dashboard2";
// import Dashboard from "./pages/Dashboard";

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
          element: <Dashboard2 />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
