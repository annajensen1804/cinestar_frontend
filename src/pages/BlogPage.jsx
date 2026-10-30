import { useLoaderData } from "react-router-dom";
import Header from "../components/header/Header";
import BlogList from "../components/blogSection/BlogList";
import SoMe from "../components/some/SoMe";
import Subscription from "../components/subscription/Subscription";

const BlogPage = () => {
    const { blogs } = useLoaderData();  
    
    return (
      <section>
        <Header title="BLOG ARKIV" />

        <BlogList blogs={blogs} />
        <Subscription />
        <SoMe />
      </section>
    );
}

export default BlogPage;