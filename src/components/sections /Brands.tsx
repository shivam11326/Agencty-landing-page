import { Container } from "../shared/Container";
import { Title } from "../shared/Title";
import { FaRocket, FaMagic, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button } from "../shared/Button";

const services = [
	{
		icon: <FaRocket className="text-blue-600 text-4xl mb-4" />,
		title: "Landing Page",
		description:
			"Beautiful, responsive landing pages to showcase your brand and capture leads effectively.",
	},
	{
		icon: <FaMagic className="text-violet-600 text-4xl mb-4" />,
		title: "Animated Landing Page",
		description:
			"Engaging landing pages with smooth animations and interactive elements for a modern web presence.",
	},
	{
		icon: <FaShoppingCart className="text-green-600 text-4xl mb-4" />,
		title: "Web Application with Full Backend",
		description:
			"Robust web apps with complete backend solutions, including e-commerce platforms and custom dashboards.",
	},
];

export const Brands = () => {
	return (
		<section>
			<Container className="space-y-8">
				<div className="text-center max-w-3xl mx-auto">
					<Title>Our Web Services</Title>
					<p className="mt-2 text-heading-2">
						We offer a range of web solutions to help your business grow online.
					</p>
				</div>
				<div className="flex flex-col md:flex-row justify-center gap-8">
					{services.map((service, idx) => (
						<div
							key={idx}
							className="flex-1 p-6 rounded-xl bg-body border border-box-border text-center shadow group transition-transform hover:scale-105"
						>
							{service.icon}
							<h3 className="text-xl font-semibold mb-2 text-heading-1">
								{service.title}
							</h3>
							<p className="text-heading-2">{service.description}</p>
							<Link to="/service-details">
								<Button className="mt-4">Full Details</Button>
							</Link>
						</div>
					))}
				</div>
			</Container>
		</section>
	);
};