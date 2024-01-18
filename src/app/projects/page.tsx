import Image from "next/image";

const Projects = () => {
    return (
        <div className="h-screen w-screen overflow-x-hidden flex flex-col items-center justify-center">
            <div className="flex flex-row ">
                <div className="w-16 h-96 bg-yellow-400 m-1 hover:w-52 transition-all duration-500 ease-in-out"></div>
                <div className="w-16 h-96 bg-blue-400 m-1"></div>
                <div className="w-16 h-96 bg-red-400 m-1"></div>
                <div className="w-16 h-96 bg-green-400 m-1"></div>

            </div>
        </div>
    );
}

export default Projects;