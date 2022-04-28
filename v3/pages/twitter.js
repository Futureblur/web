import { useRouter } from "next/router";
import RedirectPage from "../components/RedirectPage";

export default function Twitter() {
	const router = useRouter()
	if (typeof window !== 'undefined') {
		router.push("https://twitter.com/byfutureblur");
	}

	return (
		<RedirectPage/>
	)
}
