import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  Outlet,
} from "react-router-dom";
import { Provider } from "react-redux";
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
import { DashboardAuth } from "./dashboard/components/layout/DashboardAuth/tsx/DashboardAuth.tsx";
import { ProtectedDashboard } from "./dashboard/components/layout/ProtectedDashboard/tsx/ProtectedDashboard.tsx";
import { store } from "./store/store.ts";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./query/queryClient.ts";

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
    // Keep the production dashboard protected; render it directly for the local UI preview.
    element: import.meta.env.DEV ? <Outlet /> : <ProtectedDashboard />,
    handle: {
      breadcrumb: "Dashboard",
    },
    children: [
      {
        element: <DashboardOutlet />,
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
          {
            path: "settings",
            element: <Settings />,
            handle: {
              breadcrumb: "Settings",
            },
          },
          {
            path: "content",
            element: <Content />,
            handle: {
              breadcrumb: "Content",
            },
          },
          {
            path: "projects",
            element: <DProjects />,
            handle: {
              breadcrumb: "Projects",
            },
          },
        ],
      },
    ],
  },
  {
    path: "/dashboard/login",
    element: <DashboardAuth />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
  </StrictMode>,
);
