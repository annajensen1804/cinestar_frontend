import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { blogsLoader } from "./loaders/DataLoader";
import AppLayout from "./components/layouts/AppLayout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import BlogPage from "./pages/BlogPage";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<AppLayout />}>
        <Route index element={<Home />} loader={blogsLoader} />

        <Route path="blog" element={<BlogPage />} loader={blogsLoader} />

        <Route path="contact" element={<Contact />} />
      </Route>
    </Route>,
  ),
);

export default routes;