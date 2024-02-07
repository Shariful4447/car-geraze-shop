import teammember from '../../assets/images/team/1.jpg'
import team from '../../assets/images/team/2.jpg'
import teammembe from '../../assets/images/team/3.jpg'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';





const Team = () => {
    return (
        <div className="mt-10 mb-10">
            <div className="text-center ">
                <h2 className="text-3xl mb-2 font-bold">Meet Our Team</h2>
                <h2 className="text-xl">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </h2>
            </div>
            <div className="mt-10 grid grid-cols-3 place-items-center gap-5 ">
                <div className="card w-[350px] h-[460px] bg-base-100 shadow-xl">
                    <figure className="px-5 pt-5 h-[300px]">
                        <img src={teammember} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center m-2">
                        <h2 className="card-title">Car Engine Plug</h2>
                        <p>Engine Expert</p>
                        <div className="card-actions">
                        <button className="btn btn-circle btn-outline "> <FacebookRoundedIcon/></button>
                        <button className="btn btn-circle btn-outline "> <InstagramIcon/></button>
                        <button className="btn btn-circle btn-outline "> <TwitterIcon/></button>
                        <button className="btn btn-circle btn-outline "> <GoogleIcon /></button>
                        </div>
                    </div>
                </div>
                <div className="card w-[350px] h-[460px] bg-base-100 shadow-xl">
                    <figure className="px-5 pt-5 h-[300px]">
                        <img src={team} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center m-2">
                        <h2 className="card-title">Car Engine Plug</h2>
                        <p>Engine Expert</p>
                        <div className="card-actions">
                        <button className="btn btn-circle btn-outline "> <FacebookRoundedIcon/></button>
                        <button className="btn btn-circle btn-outline "> <InstagramIcon/></button>
                        <button className="btn btn-circle btn-outline "> <TwitterIcon/></button>
                        <button className="btn btn-circle btn-outline "> <GoogleIcon /></button>
                        </div>
                    </div>
                </div>
                <div className="card w-[350px] h-[460px] bg-base-100 shadow-xl">
                    <figure className="px-5 pt-5 h-[300px]">
                        <img src={teammembe} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center m-2">
                        <h2 className="card-title">Car Engine Plug</h2>
                        <p>Engine Expert</p>
                        <div className="card-actions">
                        <button className="btn btn-circle btn-outline "> <FacebookRoundedIcon/></button>
                        <button className="btn btn-circle btn-outline "> <InstagramIcon/></button>
                        <button className="btn btn-circle btn-outline "> <TwitterIcon/></button>
                        <button className="btn btn-circle btn-outline "> <GoogleIcon /></button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Team;