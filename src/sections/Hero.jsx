const Hero = () => {
    return (
        <div className="max-container w-full ">
            <video
                autoPlay
                loop
                muted
                src="https://cdn.pixabay.com/vimeo/839864556/cars-168811.mp4?width=1280&hash=aefd7df4d27f862fef919062c098d6a346f30a62"
                className="w-full h-screen object-cover absolute z-15 max-container"
            ></video>
            <div className="bg-slate-400 w-full h-screen relative bg-opacity-30 flex items-center px-24">
                <h1 className="text-7xl text-white font-bold leading-normal capitalize">
                    <span>looking for</span>
                    <br />
                    <span>quality construction?</span>
                </h1>
            </div>
        </div>
    );
};

export default Hero;
