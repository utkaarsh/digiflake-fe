import { Outlet, createBrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import NotfoundPage from "./components/NotfoundPage";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import { useSelector } from "react-redux";
import Category from "./components/Category";
import Product from "./components/Product";

function App() {
  const user = useSelector((store) => store.auth);
  return (
    <div className="">
      {user && <Header />}
      <Outlet />
    </div>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/category",
        element: <Category />,
      },
      {
        path: "/product",
        element: <Product />,
      },
    ],
    errorElement: <NotfoundPage />,
  },
]);
export default App;
