import firstBanner from "../../assets/images/banner/1.jpg"
import secondBanner from "../../assets/images/banner/2.jpg"
import thirdBanner from "../../assets/images/banner/3.jpg"
import fourthBanner from "../../assets/images/banner/4.jpg"


const HomeBanner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={firstBanner} className="w-full" />
                    <div className="absolute justify-start transform -translate-y-1/2 left-5 right-5 top-1/2 gap-2 ml-10 w-full">
                        <p className="text-7xl mb-5 font-bold text-white p-5">Affordable <br /> Price For Car <br /> Servicing</p>
                        <p className="m-5 text-2xl text-white">There are many variations of passages of  available,<br /> but the majority have suffered alteration in some form</p>
                        <div className="m-5 flex gap-5 mt-10 ">
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
                    <img src={secondBanner} className="w-full" />
                    <div className="absolute justify-start transform -translate-y-1/2 left-5 right-5 top-1/2 gap-2 ml-10 w-full">
                        <p className="text-7xl mb-5 font-bold text-white p-5">Affordable <br /> Price For Car <br /> Servicing</p>
                        <p className="m-5 text-2xl text-white">There are many variations of passages of  available,<br /> but the majority have suffered alteration in some form</p>
                        <div className="m-5 flex gap-5 mt-10 ">
                            <button className="btn bg-red-500 font-bold text-xl text-white">Discover More</button>
                            <button className="btn bg-transparent font-bold text-xl text-white">Discover Latest</button>

                        </div>
                    </div>

                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-2">
                    <a href="#slide4" className="btn btn-circle hover:bg-red-500">❮</a> 
                    <a href="#slide2" className="btn btn-circle hover:bg-red-500">❯</a>
                    </div>
                </div> 
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={thirdBanner} className="w-full" />
                    <div className="absolute justify-start transform -translate-y-1/2 left-5 right-5 top-1/2 gap-2 ml-10 w-full">
                        <p className="text-7xl mb-5 font-bold text-white p-5">Affordable <br /> Price For Car <br /> Servicing</p>
                        <p className="m-5 text-2xl text-white">There are many variations of passages of  available,<br /> but the majority have suffered alteration in some form</p>
                        <div className="m-5 flex gap-5 mt-10 ">
                            <button className="btn bg-red-500 font-bold text-xl text-white">Discover More</button>
                            <button className="btn bg-transparent font-bold text-xl text-white">Discover Latest</button>

                        </div>
                    </div>

                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-2">
                    <a href="#slide4" className="btn btn-circle hover:bg-red-500">❮</a> 
                    <a href="#slide2" className="btn btn-circle hover:bg-red-500">❯</a>
                    </div>
                </div> 
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={fourthBanner} className="w-full" />
                    <div className="absolute justify-start transform -translate-y-1/2 left-5 right-5 top-1/2 gap-2 ml-10 w-full">
                        <p className="text-7xl mb-5 font-bold text-white p-5">Affordable <br /> Price For Car <br /> Servicing</p>
                        <p className="m-5 text-2xl text-white">There are many variations of passages of  available,<br /> but the majority have suffered alteration in some form</p>
                        <div className="m-5 flex gap-5 mt-10 ">
                            <button className="btn bg-red-500 font-bold text-xl text-white">Discover More</button>
                            <button className="btn bg-transparent font-bold text-xl text-white">Discover Latest</button>

                        </div>
                    </div>

                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-2">
                    <a href="#slide4" className="btn btn-circle hover:bg-red-500">❮</a> 
                    <a href="#slide2" className="btn btn-circle hover:bg-red-500">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;