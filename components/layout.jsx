import Navbar from "./navbar.jsx";
import Footer from "./footer.jsx";
import HeadComponent from "./head-component.jsx";

const Layout = ({ children }) => {
	return (
		<>
			<HeadComponent />
			<div className="p-0 antialiased bg-zinc-50 lg:mx-auto container-none">
				<Navbar />
				<div className="z-0">{children}</div>
				<Footer />
			</div>
		</>
	);
};

export default Layout;
