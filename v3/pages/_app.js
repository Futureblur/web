import '../styles/globals.css'
import dynamic from "next/dynamic";
import "../components/Header"

const DynamicHeader = dynamic(() => import("../components/Header"), { ssr: false })

function MyApp({ Component, pageProps }) {
    return <>
        <DynamicHeader/>
        <Component { ...pageProps } />
    </>
}

export default MyApp
