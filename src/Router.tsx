import { createBrowserRouter } from "react-router-dom";

import RootLayout from "./Layouts/RootLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import RepoList  from "./components/RepoList"
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/education', element: <Experience /> },
      { path: '/projects', element: <RepoList /> },
    ]
  }
]);

export default router;