import about from '../../assets/images/about_us/person.jpg'
import aboutParts from '../../assets/images/about_us/parts.jpg'


const AboutUs = () => {
    return (
        <div>
            <div className="hero min-h-fit  bg-base-200">
                <div className="hero-content flex-col lg:flex-row my-10">
                    <div className='lg:w-1/2 relative'>
                        <img src={about} className="w-3/4 rounded-lg shadow-2xl" />
                        <img src={aboutParts} className="w-1/2 absolute right-5 top-1/2 border-8 border-white rounded-lg shadow-2xl" />
                    </div>
                    <div className='lg:w-1/2'>
                        <p className='text-red-500'>About Us</p>
                        <h1 className="text-5xl font-bold p-5">We are qualified <br /> & of experience <br /> in this field</h1>
                        <p className="p-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. <br /> the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                        <button className="btn btn-primary bg-red-500">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;