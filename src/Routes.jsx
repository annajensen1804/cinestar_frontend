import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { backofficeLoader, blogDetailsLoader, blogsLoader } from "./loaders/DataLoader";
import AppLayout from "./components/layouts/AppLayout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import BlogPage from "./pages/BlogPage";
import BlogDetails from "./pages/BlogDetails";
import Backoffice from "./pages/backoffice/Backoffice";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<AppLayout />}>
        <Route index element={<Home />} loader={blogsLoader} />

        <Route path="blog" element={<BlogPage />} loader={blogsLoader} />
        <Route
          path="blog/:blogId"
          element={<BlogDetails />}
          loader={blogDetailsLoader}
        />

        <Route path="contact" element={<Contact />} />
      </Route>

      <Route path="backoffice" element={<Backoffice />} loader={backofficeLoader} />

    </Route>,
  ),
);

export default routes;