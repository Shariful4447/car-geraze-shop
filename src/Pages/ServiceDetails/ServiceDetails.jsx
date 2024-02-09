import serviceDetails from '../../assets/images/checkout/checkout.png'
import newImage from '../../assets/images/banner/3.jpg'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AddchartIcon from '@mui/icons-material/Addchart';
import logo from '../../assets/logo.svg'
import firstBanner from "../../assets/images/banner/1.jpg"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Link, useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {

    const services = useLoaderData();
    const {_id, title, price} = services;
    console.log(services);

    return (
        <div>
            <div className='relative'>
                <h2>Service Details</h2>
                <img className='w-full h-[300px]' src={serviceDetails} alt="" />
                <p className='text-xl absolute bottom-0 left-1/2 border-2 bg-red-500 text-white-500 w-48 text-center h-12 '>Service Details</p>

            </div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-16">
                <div className='lg:col-span-3 mb-5'>
                    
                    <img className='h-96 w-full border-2 rounded-xl' src={newImage} alt="" />
                    <div className='text-center mt-6'>
                        <h2 className='m-6 text-2xl'>{title}</h2>
                        <p className='text-xl'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
                    </div>

                    <div className='mt-10 grid grid-cols-2 justify-items-center gap-5'>
                        <div className="card w-96 h-56 bg-[#e5e7eb] text-black">
                            <div className="card-body">
                                <div className='p-5'>
                                    <h2 className="card-title text-xl mb-2">Instant Car Services</h2>
                                    <p className='text-lg'>It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</p>
                                </div>
                               
                            
                            </div>
                        </div>
                        <div className="card w-96 h-56 bg-[#e5e7eb] text-black">
                            <div className="card-body">
                                <div className='p-5'>
                                    <h2 className="card-title text-xl mb-2">Instant Car Services</h2>
                                    <p className='text-lg'>It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</p>
                                </div>
                               
                            
                            </div>
                        </div>
                        <div className="card w-96 h-56 bg-[#e5e7eb] text-black">
                            <div className="card-body">
                                <div className='p-5'>
                                    <h2 className="card-title text-xl mb-2">Instant Car Services</h2>
                                    <p className='text-lg'>It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</p>
                                </div>
                               
                            
                            </div>
                        </div>
                        <div className="card w-96 h-56 bg-[#e5e7eb] text-black">
                            <div className="card-body">
                                <div className='p-5'>
                                    <h2 className="card-title text-xl mb-2">Instant Car Services</h2>
                                    <p className='text-lg'>It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</p>
                                </div>
                               
                            
                            </div>
                        </div>

                    </div>
                    <div className='mt-6 text-xl'>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
                    </div>
                    <div className='mt-6 text-2xl font-bold'>
                        <p>3 Simple Steps to Process</p>
                    </div>

                    <div className='mt-2 grid grid-cols-3 gap-5'>
                        <div className="card w-80 bg-base-100 shadow-xl">
                            <div className="card-body text-center">
                                <div className="card-actions justify-center">
                                    <div className="radial-progress bg-red-500 text-primary-content border-4 border-red-500" style={{"--value":100}} role="progressbar">1</div>
                                </div>

                                <h2 className=" m-2 text-2xl text-center">Step One</h2>
                                <p className='text-xl'>It uses a dictionary of over 200 .</p>
                                
                            </div>
                        </div>
                        <div className="card w-80 bg-base-100 shadow-xl">
                            <div className="card-body text-center">
                                <div className="card-actions justify-center">
                                    <div className="radial-progress bg-red-500 text-primary-content border-4 border-red-500" style={{"--value":100}} role="progressbar">2</div>
                                </div>

                                <h2 className=" m-2 text-2xl text-center">Step Two</h2>
                                <p className='text-xl'>It uses a dictionary of over 200 .</p>
                                
                            </div>
                        </div>
                        <div className="card w-80 bg-base-100 shadow-xl">
                            <div className="card-body text-center">
                                <div className="card-actions justify-center">
                                    <div className="radial-progress bg-red-500 text-primary-content border-4 border-red-500" style={{"--value":100}} role="progressbar">3</div>
                                </div>

                                <h2 className=" m-2 text-2xl text-center">Step Three</h2>
                                <p className='text-xl'>It uses a dictionary of over 200 .</p>
                                
                            </div>
                        </div>

                    </div>

                    <div className='mt-10'>
                        <div className="hero h-96" style={{backgroundImage: `url(${firstBanner})`}}>
                            <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="w-16">
                                    <button className="btn btn-circle h-16 w-16 btn-outline bg-white">
                                        <PlayArrowIcon></PlayArrowIcon>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                <div className='lg:col-span-1'>
                    <div className='bg-[#f1f5f9] h-[500px]'>
                        <div className=''>
                            <h2 className='text-xl font-bold p-2 text-center text-xl'>Service Type</h2>
                        </div>
                        <div className='m-8 p-2'>
                            <button className="btn h-16 btn-outline bg-white hover:bg-red-500 w-full mb-4">Full Car Repair<ArrowForwardIcon className='text-2xl text-red-500'/></button> <br />
                            <button className="btn btn-outline bg-white hover:bg-red-500 h-16 w-full mb-4">Engine Repair<ArrowForwardIcon className='text-2xl text-red-500'/></button> <br />
                            <button className="btn btn-outline h-16 bg-white hover:bg-red-500  w-full mb-4">Automatic Services<ArrowForwardIcon className='text-2xl text-red-500'/></button> <br />
                            <button className="btn btn-outline h-16 bg-white hover:bg-red-500 w-full mb-4">Engine Oil Change<ArrowForwardIcon className='text-2xl text-red-500'/></button> <br />
                            <button className="btn btn-outline h-16 bg-white hover:bg-red-500 w-full">Battery Charge<ArrowForwardIcon className='text-2xl text-red-500'/></button>
                        </div>
                    </div>

                    <div className='bg-[#0f172a] h-[300px] mt-6'>
                        <h2 className='text-xl text-white font-bold p-4'>DownLoad</h2>
                        <div className='flex justify-between'>
                            <div className='flex gap-2 text-white font-bold m-4'>
                                <div>
                                    <AddchartIcon></AddchartIcon>
                                </div>
                                <div>
                                    <h2>Our Brochure</h2>
                                    <h3>Download</h3>
                                </div>
                            </div>
                            <div className='p-4'>
                                    <button className="mr-2 btn btn-outline bg-white hover:bg-red-500"><ArrowForwardIcon className='text-2xl text-red-500'/></button> <br />
                            </div>
                        </div>
                        <div className='flex justify-between'>
                            <div className='flex gap-2 text-white font-bold m-4'>
                                <div>
                                    <AddchartIcon></AddchartIcon>
                                </div>
                                <div>
                                    <h2>Company Details</h2>
                                    <h3>Download</h3>
                                </div>
                            </div>
                            <div className='p-4'>
                                    <button className="mr-2 btn btn-outline bg-white hover:bg-red-500"><ArrowForwardIcon className='text-2xl text-red-500'/></button> <br />
                            </div>
                        </div>
                        
                    </div>
                    <div className='bg-[#0f172a] h-[400px] mb-5'>
                        
                        <div className='m-10 p-2 text-center'>
                            <div>
                                <img className='mt-16 mx-auto mb-5' src={logo} alt="" />
                                <p className='text-xl text-white'>Need Help? We Are Here
                                    To Help You</p>
                            </div>
                            <div className='bg-white text-center h-[100px] relative mt-5'>
                                <h2 className='text-2xl  font-bold mt-2 p-2'>Car Doctor Special</h2>
                                <p className='text-xl  font-bold'>Save up to <span className='text-red-500'>60% off</span> </p>
                                <div>
                                    <p className='bg-red-500 absolute text-white top-20 right-10 p-2 text-center w-48'>Get A Quote</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='mb-5'>
                        <h2 className='text-3xl font-bold m-2'>Price : {price}</h2>
                        <Link to={`/checkout/${_id}`}>
                            <button className="btn text-xl h-10 btn-outline bg-red-500 w-full">Procceed Checkout</button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ServiceDetails;