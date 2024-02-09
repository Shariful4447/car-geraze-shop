import { useLoaderData } from 'react-router-dom';
import serviceDetails from '../../assets/images/checkout/checkout.png'

const CheckOut = () => {
    const checkout = useLoaderData();
    const {title} = checkout;

    const handleBookService=(e) =>{
        e.preventDefault();
        const form = e.target;
        const fname = form.fname.value;
        const lname = form.lname.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const message = form.message.value;
        console.log(fname, lname, email, phone, message);
    }
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
                        <form onSubmit={handleBookService} className="card-body h-[700px] w-[1200px] mt-10 ml-5">
                        <p className='text-3xl text-center font bold'>Service Namme : {title}</p>
                            <div className='flex gap-10 mx-auto'>
                                <div className="form-control w-[550px]">
                                    <label className="label">
                                        <span className="label-text">First Name</span>
                                    </label>
                                    <input type="text" name='fname' placeholder="First Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control w-[550px]">
                                    <label className="label">
                                        <span className="label-text">Last Name</span>
                                    </label>
                                    <input type="text" name='lname'  placeholder="Last Name" className="input input-bordered" required />
                                </div>
                            </div>
                            <div className='flex gap-10 mx-auto'>
                                <div className="form-control w-[550px]">
                                    <label className="label">
                                        <span className="label-text">Phone</span>
                                    </label>
                                    <input type="text" name='phone' placeholder="phone" className="input input-bordered" required />
                                </div>
                                <div className="form-control w-[550px]">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                                </div>
                                
                            </div>
                            <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Message</span>
                                    </label>
                                    <textarea name='message' className="textarea textarea-bordered h-[250px]" placeholder="Type your Message here"></textarea>
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