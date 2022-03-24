import { lazy } from "react";

const Home = lazy(() => import("../pages/home"));
const About = lazy(() => import("../pages/about"));
const Login = lazy(() => import("../pages/login"));

const routes = [
  {
    path: "/",
    exact: true,
    component: Home,
    name: "Home",
  },
  {
    path: "/home",
    component: Home,
    name: "Home",
  },
  {
    path: "/about",
    component: About,
    name: "About",
  },
  {
    path: "/login",
    component: Login,
    name: "Login",
  },
];
export default routes;
