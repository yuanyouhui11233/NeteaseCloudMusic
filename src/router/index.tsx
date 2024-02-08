import { Navigate, RouteObject } from "react-router-dom";
import Discover from "@/views/Discover";
import NotFound from "@/views/NotFound/NotFound";
import My from "@/views/My";
import Friend from "@/views/Friend";
import Store from "@/views/Store";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/discover" />
  },
  {
    path: "/discover",
    element: <Discover />
  },
  {
    path: "/my",
    element: <My />
  },
  {
    path: "/friend",
    element: <Friend />
  },
  {
    path: "/store",
    element: <Store />
  },
  {
    path: "*",
    element: <NotFound />
  }
];
export default routes;
