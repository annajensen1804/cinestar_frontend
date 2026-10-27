import Awards from "../components/awards/Awards";
import ContactSection from "../components/contactSection/ContactSection";
import Header from "../components/header/Header";

const Home = () => {
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
      </section>
    );
}

export default Home;