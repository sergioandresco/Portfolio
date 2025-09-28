import { FaReact, FaGitAlt, FaGithub, FaFigma, FaApple, FaDocker, FaHtml5, FaCss3Alt, FaAws } from "react-icons/fa";
import { IoLogoJavascript, IoLogoVercel } from "react-icons/io5";
import { SiTypescript, SiMui, SiPostman, SiGoogletagmanager } from "react-icons/si";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { VscAzure } from "react-icons/vsc";
import { TbBrandVite } from "react-icons/tb";

const Skills = [
    { technologie: "React", icon: FaReact, url: "https://es.react.dev/" },
    { technologie: "JavaScript", icon: IoLogoJavascript, url: "https://developer.mozilla.org/es/docs/Web/JavaScript" },
    { technologie: "TypeScript", icon: SiTypescript, url: "https://www.typescriptlang.org/" },
    { technologie: "Material UI", icon: SiMui, url: "https://mui.com/" },
    { technologie: "Git", icon: FaGitAlt, url: "https://git-scm.com/" },
    { technologie: "GitHub", icon: FaGithub, url: "https://github.com/" },
    { technologie: "Figma", icon: FaFigma, url: "https://www.figma.com/" },
    { technologie: "macOS", icon: FaApple, url: "https://www.apple.com/" },
    { technologie: "Docker", icon: FaDocker, url: "https://www.docker.com/" },
    { technologie: "HTML", icon: FaHtml5, url: "https://developer.mozilla.org/es/docs/Web/HTML" },
    { technologie: "CSS", icon: FaCss3Alt, url: "https://developer.mozilla.org/es/docs/Web/CSS" },
    { technologie: "Tailwind", icon: RiTailwindCssFill, url: "https://tailwindcss.com/" },
    { technologie: "AWS", icon: FaAws, url: "https://aws.amazon.com/" },
    { technologie: "Azure", icon: VscAzure, url: "https://azure.microsoft.com/" },
    { technologie: "Postman", icon: SiPostman, url: "https://www.postman.com/" },
    { technologie: "Next.js", icon: RiNextjsFill, url: "https://nextjs.org/" },
    { technologie: "GTM", icon: SiGoogletagmanager, url: "https://marketingplatform.google.com/intl/en/about/tag-manager/" },
    { technologie: "Vercel", icon: IoLogoVercel, url: "https://vercel.com/" },
    { technologie: "Vite", icon: TbBrandVite, url: "https://vite.dev/" },
];

export default Skills;