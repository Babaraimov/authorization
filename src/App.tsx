import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./components/pages/products/main/main";
import AuthoUser from "./components/pages/authorization/authoUser";
import AddProduct from "./components/pages/products/addProduct/addProduct";
import EditProduct from "./components/pages/products/editPtoduct/editProduct";
import DeleteProduct from "./components/pages/products/deleteProduct/deleteProduct";
function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Main /> },
    { path: "/authoUser", element: <AuthoUser /> },
    { path: "/addProduct", element: <AddProduct /> },
    { path: "/editProduct", element: <EditProduct /> },
    { path: "/deleteProduct", element: <DeleteProduct /> },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
