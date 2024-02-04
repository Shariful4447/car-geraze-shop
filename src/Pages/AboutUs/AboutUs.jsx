import about from '../../assets/images/about_us/person.jpg'
import aboutParts from '../../assets/images/about_us/parts.jpg'


const AboutUs = () => {
    return (
        <div className="grid grid-cols-2">
            <div>
                <h2>Image section</h2>
                <img src={about} alt="" />
                <img className='w-72 place-content-end -mt-48 boder-4 border-solid border-orange-600 p-4' src={aboutParts} alt="" />
            </div>
            <div>
                <h2>This is description section</h2>
            </div>
        </div>
    );
};

export default AboutUs;