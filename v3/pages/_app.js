import '../styles/globals.css'
import dynamic from "next/dynamic";
import "../components/Header"
import Script from "next/script";

const DynamicHeader = dynamic(() => import("../components/Header"), { ssr: false })

function MyApp({ Component, pageProps }) {
    return <>
        <Script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"/>
        <Script noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"/>
        <DynamicHeader/>
        <Component { ...pageProps } />
    </>
}

export default MyApp
