import AboutUs from "../AboutUs/AboutUs";
import CoreFeature from "../CoreFeature/CoreFeature";
import HomeBanner from "../HomeBannner/HomeBanner";
import InfoSection from "../InfoSection/InfoSection";
import Products from "../Products/Products";
import Services from "../Services/Services";



const Home = () => {
    return (
        <div>
            
            <HomeBanner></HomeBanner>
            <AboutUs></AboutUs>
            <Services></Services>
            <InfoSection></InfoSection>
            <Products></Products>
            <CoreFeature></CoreFeature>
            
        </div>
    );
};

export default Home;