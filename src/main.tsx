import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import { Home } from './components/layout/middle/pages/home/tsx/Home.tsx'
import './index.css'
import App from './App.tsx'
import { About } from './components/layout/middle/pages/about/tsx/About.tsx'
import { Projects } from './components/layout/middle/pages/projects/tsx/Projects.tsx'
import { Contact } from './components/layout/middle/pages/contact/tsx/Contact.tsx'
import { Features } from './components/layout/middle/pages/features/tsx/Features.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
       index: true,
        element: <Navigate to="/home" replace />,
      },
      {
       path: "home",
       element: <Home/>,
      },
      {
       path: "about",
       element: <About/>,
      },
      {
       path: "projects",
       element: <Projects/>,
      },
      {
       path: "contact",
       element: <Contact/>,
      },
      {
       path: "features",
       element: <Features/>,
      },
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  // {<StrictMode>} {</StrictMode>,}
    <RouterProvider router={router} />
)
