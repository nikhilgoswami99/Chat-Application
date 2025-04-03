import { createRoot } from "react-dom/client";
import { lazy, Suspense } from "react";

import "./index.css";
import App from "./App.jsx";

// To load the pages only when the route is accessed. Earlier all the pages were getting loaded at once.

const Home = lazy(() => import("./pages/home/home.jsx"));
const Login = lazy(() => import("./pages/login/login.jsx"));
const Chat = lazy(() => import("./pages/chat/chat.jsx"));
const Groups = lazy(() => import("./pages/groups/group.jsx"));

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "/chat/:id",
        element: <Chat />,
      },
    ],
  },
  {
    path: "/groups",
    element: <Groups />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
