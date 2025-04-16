import { createRoot } from "react-dom/client";
import { lazy, Suspense } from "react";

import "./index.css";
import App from "./App.jsx";

// To load the pages only when the route is accessed. Earlier all the pages were getting loaded at once.
const Home = lazy(() => import("./pages/home/home.jsx"));
const Login = lazy(() => import("./pages/login/login.jsx"));
const Chat = lazy(() => import("./pages/chat/chat.jsx"));
const Groups = lazy(() => import("./pages/groups/group.jsx"));

import ProtectedRoutes from "./components/protectedRoutes/protectedRoutes.jsx";
import PublicRoutes from "./components/publicRoutes/publicRoutes.jsx";
import { LayoutLoader } from "./components/loaders/loaders.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

let user = true;

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        element: <ProtectedRoutes user={user}/>,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "chat/:id",
            element: <Chat />,
          },
          {
            path: "groups",
            element: <Groups />,
          },
        ],
      },
    ],
  },
  {
    element: <PublicRoutes user={user}/>,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <Suspense fallback={<LayoutLoader/>}>
    
    <div onContextMenu={(e) => e.preventDefault()}><RouterProvider router={router} /></div>
  </Suspense>
);
