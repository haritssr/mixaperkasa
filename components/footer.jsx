import Image from "next/image";

const Footer = () => {
	return (
		<div className="xl:px-20 lg:px-10 bg-orange-50">
			<div className="px-10 py-3 md:px-5 lg:mx-auto ">
				<div className="my-5">
					{/* className="w-auto h-36" */}
					<Image src="/images/mpi250px.png" alt="Mixa Logo" width={150} height={150} />
				</div>
				<div className="flex flex-col items-start justify-between my-5 tracking-wide md:mx-5 lg:mx-auto lg:flex-row">
					<div className="md:w-3/5 lg:w-2/5">
						<div className="mb-3 text-3xl font-bold uppercase text-stone-800">
							PT Mixa Perkasa Indonesia
						</div>
						<div className="mb-4 text-lg text-stone-700/90">
							Emerald Avenue Comercial Park Blok EA-A27 Jl. Boulevard CBD Bintaro, RT. 003 RW. 007, Perigi
							Pondok Aren, Kota Tangerang Selatan Banten
						</div>
						<div className="mb-4 text-lg text-stone-700/70">
							<div>
								<span>Email</span>
								<span>{' '}:{' '}</span>
								<span>
									<a href="mailto:mpi@mixaperkasa.com">mpi@mixaperkasa.com</a>
								</span>
							</div>
							<div>
								<span>Telp</span>
								<span>{' '}:{' '}</span>
								<span>
									<a href="tel:+642122210280">(021) 222 10 280</a>
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className="flex items-center justify-center pt-5 mb-5 text-lg font-semibold border-t-4 border-zinc-900/50 text-stone-700/90">
					&copy; {new Date().getFullYear()} PT Mixa Perkasa Indonesia
				</div>
			</div>
		</div>
	);
};

export default Footer;
