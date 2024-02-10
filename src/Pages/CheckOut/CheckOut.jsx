import { useLoaderData } from 'react-router-dom';
import serviceDetails from '../../assets/images/checkout/checkout.png'
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import Swal from "sweetalert2";


const CheckOut = () => {
    const checkout = useLoaderData();
    const {title, price, _id, img} = checkout;
    const user = useContext(AuthContext);
    
    

    const handleBookService=(e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const amount = form.amount.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const message = form.message.value;
        
        const booking = {
            customerName: name,
            service: title,
            img: img,
            amount: amount,
            service_id: _id,
            email: email,
            phone,
            message



        }
        console.log(booking);

        fetch('http://localhost:3000/bookings', {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res=>res.json())
        .then(data =>{
            console.log(data);
            if(data.insertedId){
                Swal.fire(
                    "Success!",
                    "Successfully Booked Service",
                    "success"
             )

            }
        })
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
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="First Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control w-[550px]">
                                    <label className="label">
                                        <span className="label-text">Due Amount</span>
                                    </label>
                                    <input type="text" name='amount' defaultValue={"$" + price}  placeholder="Last Name" className="input input-bordered" required />
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
                                    <input type="email" name='email' defaultValue={user?.user?.email} placeholder="email" className="input input-bordered" required />
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