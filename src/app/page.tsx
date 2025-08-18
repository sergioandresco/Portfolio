import NavbarHeader from "@/components/navbar-header";
import About from "@/pages/about";

export default function Home() {
	return (
		<div className="py-[30px]  px-[34px] sm:px-[120px]">
			<NavbarHeader />
			<About />
		</div>
	);
}
