import { useEffect, useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";


const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))

    }, [])
    return (
        <div>
            <h2>This is service section</h2>

            <div>
                <h3 className="text-3xl font-bold text-center mt-5">Our Service Area</h3>
                <p className="text-xl text-center p-2">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>

            <div className="grid grid-cols-3 place-items-center">
                
                {
                    services.map(service => <ServiceCard
                    key={services._id}
                    service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;