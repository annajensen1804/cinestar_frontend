import { useLoaderData } from "react-router-dom";
import Awards from "../components/awards/Awards";
import BlogSection from "../components/blogSection/BlogSection";
import ContactSection from "../components/contactSection/ContactSection";
import Header from "../components/header/Header";
import SoMe from "../components/some/SoMe";

const Home = () => {
  const blogs = useLoaderData();

  const latestblog = blogs?.at(0); // viser den første (= den nyeste) blogindlæg

    return (
      <section>
        <Header
          isMainPage={true}
          brandName="CINESTAR STUDIO"
          title="FILM & TV PRODUKTION"
          description="Vi skaber levende fortællinger, der fanger dit publikum. Fra idé til færdigt produkt leverer vi professionelle film- og tv-løsninger, der gør din historie uforglemmelig."
        />
        <Awards />
        <ContactSection />
        <BlogSection blogs={[latestblog]} />
        <SoMe />
      </section>
    );
}

export default Home;