type ParagraphProps = {
    texts?: string[];
}

function Paragraph({texts = []}: ParagraphProps) {
    return ( 
        <>
            {texts.map((text, index) => (
                <p 
                    key={index} 
                    className="text-white text-[20px] text-base text-justify mb-4"
                >
                    {text}
                </p>
            ))}
        </>
    );
}

export default Paragraph;