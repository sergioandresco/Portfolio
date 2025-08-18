function TitleHero({title}: {title?: string}) {
    return ( 
        <div 
            className="
                title-hero
                max-w-[1000px]
            "
        >
            <h2
                className="
                    text-white
                    text-center
                    sm:text-start
                    text-[50px]
                    sm:text-[88px]
                    leading-[64px]
                    sm:leading-[108px]
                "
            >{title}</h2>
        </div>
    );
}

export default TitleHero;