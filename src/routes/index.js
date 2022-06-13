import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Profile from "~/pages/Profile";
import Upload from "~/pages/Upload";
import Search from "~/pages/Search";
import Login from "~/pages/Login";
//Layouts
import { HeaderOnly } from "~/components/Layout";
import Register from "~/pages/Register";
//Public Routes
const publicRoutes = [
  { path: "/", component: Home, layout: HeaderOnly },
  { path: "/following", component: Following },
  { path: "/profile", component: Profile },
  { path: "/upload", component: Upload, layout: HeaderOnly },
  { path: "/search", component: Search, layout: null },
  { path: "/login", component: Login, layout: null },
  { path: "/register", component: Register, layout: null },
];
//private Routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
