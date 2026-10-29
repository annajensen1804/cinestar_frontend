import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { backofficeLoader, blogDetailsLoader, blogsLoader } from "./loaders/DataLoader";
import AppLayout from "./components/layouts/AppLayout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import BlogPage from "./pages/BlogPage";
import BlogDetails from "./pages/BlogDetails";
import Backoffice from "./pages/backoffice/Backoffice";
import Login from "./pages/login/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Loading from "./components/loading/Loading";
import ErrorElement from "./components/feedbackElements/ErrorElement";
import NotFound from "./pages/404";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<AppLayout />} hydrateFallbackElement={<Loading />}>
        <Route
          index
          element={<Home />}
          loader={blogsLoader}
          errorElement={<ErrorElement />}
        />

        <Route
          path="blog"
          lement={<BlogPage />}
          loader={blogsLoader}
          errorElement={<ErrorElement />}
        />

        <Route
          path="blog/:blogId"
          element={<BlogDetails />}
          loader={blogDetailsLoader}
          errorElement={<ErrorElement />}
        />

        <Route
          path="contact"
          element={<Contact />}
          errorElement={<ErrorElement />}
        />

        <Route
          path="login"
          element={<Login />}
          errorElement={<ErrorElement />}
        />

        <Route path="*" element={<NotFound />} />
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route
          path="backoffice"
          element={<Backoffice />}
          loader={backofficeLoader}
          errorElement={<ErrorElement />}
        />
      </Route>
    </Route>,
  ),
);

export default routes;