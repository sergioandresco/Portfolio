function DescriptionProject({gifUrl, nameProject, description}: {gifUrl: string, nameProject: string, description: string}) {
    return ( 
        <div
            className="
                flex
                flex-col
                px-[18px]
            "
        >
            <div>
                <img 
                    src={gifUrl} 
                    alt={nameProject} 
                    className="
                        rounded-md
                        border-4
                        border-white
                    "
                />
            </div>
            <div>
                <h2
                    className="
                        text-[50px]
                        sm:text-[88px]
                        text-center
                    "
                >
                    Overview
                </h2>
            </div>
            <div>
                <p className="text-[22px]">
                    {description}
                </p>
            </div>
        </div>
    );
}

export default DescriptionProject;