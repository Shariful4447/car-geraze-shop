import firstBanner from "../../assets/images/banner/1.jpg"
import secondBanner from "../../assets/images/banner/2.jpg"
import thirdBanner from "../../assets/images/banner/3.jpg"
import fourthBanner from "../../assets/images/banner/4.jpg"


const HomeBanner = () => {
    return (
        <div>
            <div className="carousel w-full h-[600px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={firstBanner} className="w-full rounded-xl" />
                    <div className="absolute justify-start transform -translate-y-1/2  top-1/2 h-full w-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] rounded-xl">
                        <p className="text-7xl ml-10 mt-10 mb-5 font-bold text-white p-5">Affordable <br /> Price For Car <br /> Servicing</p>
                        <p className="ml-10 text-2xl text-white p-5">There are many variations of passages of  available,<br /> but the majority have suffered alteration in some form</p>
                        <div className="ml-10 p-5 flex gap-5 mt-10 ">
                            <button className="btn bg-red-500 font-bold text-xl text-white">Discover More</button>
                            <button className="btn bg-transparent font-bold text-xl text-white">Discover Latest</button>

                        </div>
                    </div>

                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-2">
                    <a href="#slide4" className="btn btn-circle hover:bg-red-500">❮</a> 
                    <a href="#slide2" className="btn btn-circle hover:bg-red-500">❯</a>
                    </div>
                </div> 
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={secondBanner} className="w-full rounded-xl" />
                    <div className="absolute justify-start transform -translate-y-1/2   top-1/2 gap-2 h-full w-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] rounded-xl">
                        <p className="text-7xl ml-10 mt-10 mb-5 font-bold text-white p-5">Affordable <br /> Price For Car <br /> Servicing</p>
                        <p className="ml-10 text-2xl text-white p-5">There are many variations of passages of  available,<br /> but the majority have suffered alteration in some form</p>
                        <div className="ml-10 p-5 flex gap-5 mt-10 ">
                            <button className="btn bg-red-500 font-bold text-xl text-white">Discover More</button>
                            <button className="btn bg-transparent font-bold text-xl text-white">Discover Latest</button>

                        </div>
                    </div>

                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-2">
                    <a href="#slide1" className="btn btn-circle hover:bg-red-500">❮</a> 
                    <a href="#slide3" className="btn btn-circle hover:bg-red-500">❯</a>
                    </div>
                </div> 
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={thirdBanner} className="w-full rounded-xl" />
                    <div className="absolute justify-start transform -translate-y-1/2   top-1/2 gap-2 h-full w-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] rounded-xl">
                        <p className="text-7xl ml-10 mt-10 mb-5 font-bold text-white p-5">Affordable <br /> Price For Car <br /> Servicing</p>
                        <p className="ml-10 text-2xl text-white p-5">There are many variations of passages of  available,<br /> but the majority have suffered alteration in some form</p>
                        <div className="ml-10 p-5 flex gap-5 mt-10 ">
                            <button className="btn bg-red-500 font-bold text-xl text-white">Discover More</button>
                            <button className="btn bg-transparent font-bold text-xl text-white">Discover Latest</button>

                        </div>
                    </div>

                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-2">
                    <a href="#slide2" className="btn btn-circle hover:bg-red-500">❮</a> 
                    <a href="#slide4" className="btn btn-circle hover:bg-red-500">❯</a>
                    </div>
                </div> 
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={fourthBanner} className="w-full rounded-xl" />
                    <div className="absolute justify-start transform -translate-y-1/2   top-1/2 gap-2 h-full w-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] rounded-xl">
                        <p className="text-7xl ml-10 mt-10 mb-5 font-bold text-white p-5">Affordable <br /> Price For Car <br /> Servicing</p>
                        <p className="ml-10 text-2xl text-white p-5">There are many variations of passages of  available,<br /> but the majority have suffered alteration in some form</p>
                        <div className="ml-10 p-5 flex gap-5 mt-10 ">
                            <button className="btn bg-red-500 font-bold text-xl text-white">Discover More</button>
                            <button className="btn bg-transparent font-bold text-xl text-white">Discover Latest</button>

                        </div>
                    </div>

                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-2">
                    <a href="#slide3" className="btn btn-circle hover:bg-red-500">❮</a> 
                    <a href="#slide1" className="btn btn-circle hover:bg-red-500">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;