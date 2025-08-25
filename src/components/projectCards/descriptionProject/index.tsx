function DescriptionProject({gifUrl, nameProject, description}: {gifUrl: string, nameProject: string, description: string}) {
    return ( 
        <div
            className="
                flex
                flex-col
                px-[18px]
                py-[90px]
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
                <h2>
                    Overview
                </h2>
            </div>
            <div>
                <p>
                    {description}
                </p>
            </div>
        </div>
    );
}

export default DescriptionProject;