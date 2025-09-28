function Title({title} : {title?: string}) {
    return ( 
        <h2 className="text-white text-[50px] sm:text-[88px] text-center mb-4">
            {title}
        </h2>
    );
}

export default Title;