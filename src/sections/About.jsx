const About = () => {
    return (
        <div className="w-screen min-h-screen flex max-container">
            <div className="flex justify-center items-center px-24 py-12 w-full gap-14">
                <img src="src/assets/Rectangle1.png" alt="Building" />
                <div>
                    <h1 className="text-white font- text-6xl">Architecture</h1>
                    <p className="text-white max-w-lg font-light text-3xl mt-8">
                        Architecture is the art and science of designing and
                        constructing buildings. It blends aesthetics,
                        functionality, and safety to create spaces that serve
                        various purposes and shape our physical environment.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
