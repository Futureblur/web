import Document, { Html, Head, Main, NextScript } from 'next/document'

class AppDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<meta charSet="utf-8"/>
					<link rel="dns-prefetch" href="//fonts.googleapis.com"/>
					<link rel="preconnect" href="https://fonts.googleapis.com"/>
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
					<link
						href="https://fonts.googleapis.com/css2?family=Manrope:wght@700&family=Prompt:wght@400;600;700;900&display=swap"
						rel="stylesheet"/>
				</Head>
				<body>
				<Main/>
				<NextScript/>
				</body>
				<script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"/>
				<script noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"/>
			</Html>
		)
	}
}

export default AppDocument
