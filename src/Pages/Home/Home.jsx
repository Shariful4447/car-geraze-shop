import AboutUs from "../AboutUs/AboutUs";
import HomeBanner from "../HomeBannner/HomeBanner";
import InfoSection from "../InfoSection/InfoSection";
import Services from "../Services/Services";



const Home = () => {
    return (
        <div>
            
            <HomeBanner></HomeBanner>
            <AboutUs></AboutUs>
            <Services></Services>
            <InfoSection></InfoSection>
            
        </div>
    );
};

export default Home;