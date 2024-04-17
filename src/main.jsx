import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";
import RootLayout from "./routes/RootLayout.jsx";
import AboutUs from "./routes/AboutUs.jsx";
import SellerForm from "./routes/SellerForm.jsx";
import Careers from "./routes/Careers.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "about",
        element: <AboutUs />
      },
      {
        path: "sell-on-ecoyaan",
        element: <SellerForm />
      },
      {
        path: "careers",
        element: <Careers />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
