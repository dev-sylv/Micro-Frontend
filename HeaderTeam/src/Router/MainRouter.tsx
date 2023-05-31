import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/common/Layout";
import DataFetching from "../pages/DataFetching";
import StateManagement from "../pages/StateManagement";
import Todo from "../pages/Todo";

export const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <DataFetching />,
      },
      {
        path: "/state-management",
        element: <StateManagement />,
      },
      {
        path: "/todo",
        element: <Todo />,
      },
    ],
  },
]);
