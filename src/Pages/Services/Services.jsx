import ServiceCard from "../ServiceCard/ServiceCard";


const Services = () => {
    return (
        <div>
            <h2>This is service section</h2>

            <div>
                <h3 className="text-3xl text-center mt-5">Our Service Area</h3>
                <p className="text-xl text-center p-2">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>

            <div>
                <h2>card</h2>
                <ServiceCard></ServiceCard>
            </div>
        </div>
    );
};

export default Services;