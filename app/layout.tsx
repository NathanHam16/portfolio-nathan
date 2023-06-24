import '../styles/globals.css';

export const metadata = {
	title: 'Nathan Wang Developer Portfolio',
	previewImage: 'og/preview.png',
  };

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link href="https://fonts.googleapis.com/css2?family=JetBrains%20Mono:wght@100..800&display=block" rel="stylesheet" />
				<title>Nathan Wang Developer Portfolio</title>
				<meta name="title" content="Nathan Wang Developer Portfolio" />
				<meta name="description" content="I'm a software engineering student striving to change the world one step at a time." />


				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://example.com" />
				<meta property="og:title" content="Nathan Wang Developer Portfolio" />
				<meta property="og:description" content="I'm a software engineering student striving to change the world one step at a time." />
				<meta property="og:image" content="og/preview.png" />


				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="https://example.com" />
				<meta property="twitter:title" content="Nathan Wang Developer Portfolio" />
				<meta property="twitter:description" content="I'm a software engineering student striving to change the world one step at a time." />
				<meta property="twitter:image" content="og/preview.png" />


				<meta property="linkedin:title" content="Nathan Wang Developer Portfolio" />
				<meta property="linkedin:description" content="I'm a software engineering student striving to change the world one step at a time." />
				<meta property="linkedin:image" content="og/preview.png" />
			</head>
			<body>{children}</body>
		</html>

	);
}
