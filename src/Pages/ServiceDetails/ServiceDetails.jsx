import serviceDetails from '../../assets/images/checkout/checkout.png'
import newImage from '../../assets/images/banner/3.jpg'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AddchartIcon from '@mui/icons-material/Addchart';
import logo from '../../assets/logo.svg'
const ServiceDetails = () => {
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
                        <h2 className='text-3xl font-bold m-2'>Price : 200$</h2>
                        <button className="btn text-xl h-10 btn-outline bg-red-500 w-full">Procceed Checkout</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ServiceDetails;