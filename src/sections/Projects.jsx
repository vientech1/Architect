import { projectLinks } from "../constants/index";
import PrjCard from "../components/PrjCard";

const Projects = () => {
    return (
        <div className="w-screen min-h-screen flex bg-black max-container flex-col items-center ">
            <h1 className="text-7xl text-white text-center mt-2">
                Our Projects
            </h1>
            <div className="flex flex-row flex-wrap justify-between items-center mt-12 gap-12">
                {projectLinks.slice(2, 6).map((project) => (
                    <PrjCard key={project.id} {...project} />
                ))}
            </div>
            <button className="border-2 px-16 py-4 text-white text-xl mt-16">
                View More
            </button>
        </div>
    );
};

export default Projects;
