import { useRouter } from "next/router";
import RedirectPage from "../components/RedirectPage";

export default function Instagram() {
	const router = useRouter()
	if (typeof window !== 'undefined') {
		router.push("https://instagram.com/itsfutureblur");
	}

	return (
		<RedirectPage/>
	)
}
