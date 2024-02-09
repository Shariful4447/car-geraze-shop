import serviceDetails from '../../assets/images/checkout/checkout.png'

const CheckOut = () => {
    return (
        <div>
            <div className='mt-10 mb-10'>
                <div className='relative'>
                
                    <img className='w-full h-[300px]' src={serviceDetails} alt="" />
                    <p className='text-xl absolute bottom-0 left-1/2 border-2 bg-red-500 text-white-500 w-48 text-center h-12 '>CheckOut</p>

                </div>
            
            </div>

            <div>
                <div className="hero h-screen bg-base-200">
                    <div className="hero-content">
                        
                        <div className="card  w-screen shadow-2xl">
                        <form className="card-body h-[700px] w-[1200px] mt-10 ml-5">
                            <div className='flex gap-10 mx-auto'>
                                <div className="form-control w-[550px]">
                                    <label className="label">
                                        <span className="label-text">First Name</span>
                                    </label>
                                    <input type="text" placeholder="First Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control w-[550px]">
                                    <label className="label">
                                        <span className="label-text">Last Name</span>
                                    </label>
                                    <input type="text" placeholder="Last Name" className="input input-bordered" required />
                                </div>
                            </div>
                            <div className='flex gap-10 mx-auto'>
                                <div className="form-control w-[550px]">
                                    <label className="label">
                                        <span className="label-text">Phone</span>
                                    </label>
                                    <input type="text" placeholder="phone" className="input input-bordered" required />
                                </div>
                                <div className="form-control w-[550px]">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                
                            </div>
                            <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Message</span>
                                    </label>
                                    <textarea className="textarea textarea-bordered h-[250px]" placeholder="Type your Message here"></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Place Order</button>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;