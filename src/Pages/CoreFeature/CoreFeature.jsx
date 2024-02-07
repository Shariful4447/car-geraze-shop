import group from '../../assets/icons/group.svg'
import deliveryTime from '../../assets/icons/deliveryt.svg'
import support from '../../assets/icons/person.svg'
import equipment from '../../assets/icons/Wrench.svg'
import gerenty from '../../assets/icons/person.svg'
import delivery from '../../assets/icons/check.svg'






const CoreFeature = () => {
    return (
        <div className="mb-5">
            <div>
                <h3 className="text-3xl font-bold text-center mt-5">Why Choose Us</h3>
                <p className="text-xl text-center p-2">The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-6 place-items-center gap-2 mt-10 mb-10'>
                <div className="hero max-h-48 max-w-48 border-2 rounded-xl" >
                    <div className="hero-overlay bg-white border-2"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-18">
                            <h1 className="mt-2 mb-2 text-xl flex justify-center font-bold items-center"><img src={group} alt="" /></h1>
                            <p className="mb-2 text-black">Expert Team</p>
                        </div>
                    </div>
                </div>
                <div className="hero max-h-48 max-w-48 border-2 rounded-xl" >
                    <div className="hero-overlay bg-white border-2"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-18">
                            <h1 className="mt-2 mb-2 text-xl flex justify-center font-bold items-center"><img src={group} alt="" /></h1>
                            <p className="mb-2 text-black">Timely Delivery</p>
                        </div>
                    </div>
                </div>
                <div className="hero max-h-48 max-w-48 border-2 rounded-xl" >
                    <div className="hero-overlay bg-white border-2"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-18">
                                <h1 className="mt-2 mb-2 flex justify-center  text-xl font-bold"><img className='content-center' src={deliveryTime} alt="" /></h1>
                                <p className="mb-2">24/7 Support</p>
                            </div>
                        </div>
                </div>
                <div className="hero max-h-48 max-w-48 border-2 rounded-xl" >
                    <div className="hero-overlay bg-white border-2"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-18">
                                <h1 className="mt-2 mb-2 text-xl align-middle bg-center flex justify-center font-bold"><img  src={gerenty} alt="" /></h1>
                                <p className="mb-2">100% garenty</p>
                            </div>
                        </div>
                </div>
                <div className="hero max-h-48 max-w-48 border-2 rounded-xl" >
                    <div className="hero-overlay bg-white border-2"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-18">
                                <h1 className="mt-2 mb-2 text-xl flex justify-center font-bold"><img src={equipment} alt="" /></h1>
                                <p className="mb-2">Best Equipment</p>
                            </div>
                        </div>
                </div>
                <div className="hero max-h-48 max-w-48 border-2 rounded-xl" >
                    <div className="hero-overlay bg-white border-2"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-18">
                                <h1 className="mt-2 mb-2 text-xl flex justify-center font-bold"><img src={delivery} alt="" /></h1>
                                <p className="mb-2">Timely Delivery</p>
                            </div>
                        </div>
                </div>


            </div>
            
        </div>
        
    );
};

export default CoreFeature;