import AboutUs from "../AboutUs/AboutUs";
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
            
        </div>
    );
};

export default Home;