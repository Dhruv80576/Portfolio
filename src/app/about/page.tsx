const About = () => {
    return (
        <div className="h-screen  bg-white overflow-x-hidden">
            <div className="w-screen flex flex-col items-start mt-[5%]">
                <div className="self-end">
                </div>
                <div className="ms-[50px] text-gray-800">
                    <div className="flex flex-row">
                        <p className="text-4xl font-semibold me-2">Hello!</p>
                        <p className="text-4xl me-2">{"My name is"}</p>
                        <p className="text-4xl font-semibold">Dhruv Agrawal</p>
                    </div>
                    <div className="flex flex-row">
                        <p className="text-4xl me-2">and i love </p>
                        <p className="text-4xl font-semibold"> Software developement.</p>
                    </div>
                </div>
                <div className="ms-[50px] text-gray-700 mt-[50px]">
                    <p className="w-[40%]">{'In essence, as a software developer,I am not just proficient in crafting elegant and functional code; I am a proactive learner who consistently seeks to broaden my knowledge and skills, contributing positively to any software development endeavor I undertake.'}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
