import Head from "next/head";

const HeadComponent = () => {
	return (
		<Head>
			<title>PT Mixa Perkasa Indonesia</title>
			<meta
				name="description"
				content="PT Mixa Perkasa Indonesia adalah perusahaan yang bergerak di bidang stuktur dan beton."
			/>
			<meta name="author" content="PT Mixa Perkasa Indonesia" />
			<meta name="keywords" content="Mixa Beton, Mixa Paving, Beton, Paving" />
			{/* Open Graph Protocol */}
			<meta property="og:title" content="PT Mixa Perkasa Indonesia" />
			<meta property="og:site_name" content="PT Mixa Perkasa Indonesia" />
			<meta
				property="og:description"
				content="PT Mixa Perkasa Indonesia adalah perusahaan yang bergerak di
				bidang stuktur dan beton."
			/>
			<meta property="og:type" content="website" />
			<meta property="og:url" content="https://mixaperkasa.com/" />
			{/* Twitter Property */}
			<meta name="twitter:card" content="summary" />
			<meta name="twitter:title" content="PT Mixa Perkasa Indonesia" />
			<meta
				name="twitter:description"
				content="PT Mixa Perkasa Indonesia adalah perusahaan yang bergerak di
			bidang stuktur dan beton."
			/>

			{/* Favicon */}
			<link rel="icon" type="image/x-icon" href="/favicon.ico" />
		</Head>
	);
};

export default HeadComponent;
