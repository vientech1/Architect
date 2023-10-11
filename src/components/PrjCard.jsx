// import { projectLinks } from "../constants/index";
const PrjCard = ({ imgURL, title, date }) => {
    return (
        <div className="flex flex-col flex-1 w-full mt-4 px-4">
            <div className="w-full aspect-video h-[360px]">
                <img
                    src={imgURL}
                    alt={title}
                    className="cursor-pointer  w-full h-full object-cover"
                />
            </div>
            <h1 className="text-white text-4xl font-normal mt-4">{title}</h1>
            <p className="text-slate-400 text-lg font-thin ">{date}</p>
        </div>
    );
};

export default PrjCard;
