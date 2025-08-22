import { Separator } from "@/components/ui/separator";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
    return ( 
        <footer className="flex flex-col gap-[10px]">
            <div
                className="
                    flex
                    items-center
                "
            >
                <Separator className="mx-4 hidden sm:block flex-1 bg-purple-300/40" />
                <h2 className="text-white text-[25px] sm:text-[20px] text-center m-0">
                    © 2025 Sergio Andres Cobos Suarez 🇨🇴
                </h2>
                <Separator className="mx-4 hidden sm:block flex-1 bg-purple-300/40" />
            </div>
            <div
                className="
                    flex
                    justify-center
                    gap-[8px]
                "
            >
                <a href="https://github.com/sergioandresco" target="_blank">
                    <FaGithub color="white" className="md:w-[30px] md:h-[30px]" />
                </a>
                <a href="https://www.linkedin.com/in/sergio-andres-cobos-suarez-942637219/" target="_blank">
                    <FaLinkedin color="white" className="md:w-[30px] md:h-[30px]" />
                </a>
                <a href="https://www.instagram.com/sergioandresco/" target="_blank">
                    <FaInstagram color="white" className="md:w-[30px] md:h-[30px]" />
                </a>
            </div>
        </footer>
    );
}

export default Footer;