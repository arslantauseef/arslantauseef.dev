import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { Home } from "./components/layout/middle/home/tsx/Home.tsx";
import "./index.css";
import App from "./App.tsx";
import { About } from "./components/layout/middle/about/tsx/About.tsx";
import { Projects } from "./components/layout/middle/projects/tsx/Projects.tsx";
import { Contact } from "./components/layout/middle/contact/tsx/Contact.tsx";
import { Features } from "./components/layout/middle/features/tsx/Features.tsx";
import { DashboardOutlet } from "./dashboard/components/layout/DashboardOutlet/tsx/DashboardOutlet.tsx";
import { Dashboard } from "./dashboard/components/layout/Dashboard/tsx/Dashboard.tsx";
import { Settings } from "./dashboard/components/pages/Settings/tsx/Settings.tsx";
import { Content } from "./dashboard/components/pages/Content/tsx/Content.tsx";
import { DProjects } from "./dashboard/components/pages/Projects/tsx/DProjects.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "features",
        element: <Features />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardOutlet />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "content",
        element: <Content />,
      },
      {
        path: "projects",
        element: <DProjects />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
