import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Contact from "./pages/contact/Contact.jsx";
import Programs from "./pages/programs/Programs.jsx";
import SupportUs from "./pages/support-us/SupportUs.jsx";
import Staff from "./pages/staff/Staff.jsx";
import Home from "./pages/home/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "programs",
        element: <Programs />,
      },
      {
        path: "support-us",
        element: <SupportUs />,
      },
      {
        path: "staff",
        element: <Staff />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
