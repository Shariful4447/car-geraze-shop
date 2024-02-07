import AboutUs from "../AboutUs/AboutUs";
import CoreFeature from "../CoreFeature/CoreFeature";
import HomeBanner from "../HomeBannner/HomeBanner";
import InfoSection from "../InfoSection/InfoSection";
import Products from "../Products/Products";
import Services from "../Services/Services";
import Team from "../Team/Team";
import Testimonial from "../Testimonial/Testimonial";



const Home = () => {
    return (
        <div>
            
            <HomeBanner></HomeBanner>
            <AboutUs></AboutUs>
            <Services></Services>
            <InfoSection></InfoSection>
            <Products></Products>
            <Team></Team>
            <CoreFeature></CoreFeature>
            <Testimonial></Testimonial>
            
        </div>
    );
};

export default Home;