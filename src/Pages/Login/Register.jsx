import login from '../../assets/images/login/login.svg'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';

import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
        <div className="hero min-h-1/2 bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                
                <div className="card shrink-0 w-full max-w-md h-[700px] shadow-2xl bg-base-100 m-20">
                    <h2 className='text-center text-4xl font-bold mt-10'>Sign Up</h2>
                    <form className="card-body">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                        </div>

                        <h2 className='text-center text-2xl mt-5'>Or Sign Up With</h2>
                        <div className='flex gap-5 mx-auto'>
                            <button className="btn btn-circle btn-outline "> <FacebookRoundedIcon/></button>
                            <button className="btn btn-circle btn-outline "> <InstagramIcon/></button>
                            <button className="btn btn-circle btn-outline "> <TwitterIcon/></button>
                            <button className="btn btn-circle btn-outline "> <GoogleIcon /></button>
                        </div>
                        <p className='text-center mt-2'> Already Have an account <span className='text-red-500'> <Link to='/login'>Log In </Link> </span></p>
                    </form>
                    

                </div>
                <div className="text-center lg:text-left  m-20">
                    <img className='h-[600px]' src={login} alt="" />
                </div>
            </div>
        </div>
    </div>
    );
};

export default Register;