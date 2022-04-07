import Document, { Html, Head, Main, NextScript } from 'next/document'

class AppDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<meta charSet="utf-8"/>
					<link rel="icon" href="/public/favicon.png"/>
					<link rel="dns-prefetch" href="//fonts.googleapis.com"/>
					<link rel="preconnect" href="https://fonts.googleapis.com"/>
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
					<link
						href="https://fonts.googleapis.com/css2?family=Manrope:wght@700&family=Prompt:wght@400;600;700;900&display=swap"
						rel="stylesheet"/>

					<link rel="preload" href="../fonts/Syne/Syne-Extra.ttf" as="font" crossOrigin=""/>
				</Head>
				<body>
				<Main/>
				<NextScript/>
				</body>
			</Html>
		)
	}
}

export default AppDocument
