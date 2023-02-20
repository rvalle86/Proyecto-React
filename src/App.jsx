import "bootstrap/dist/css/bootstrap.min.css";
import { AuthComponent } from "./Components/authComponent";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomeComponent } from "./Components/HomeComponent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeComponent />,
  },
  {
    path: "/login",
    element: <AuthComponent />,
  },
  {
    path: "*",
    element: <HomeComponent />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
