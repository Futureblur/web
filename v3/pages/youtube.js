import { useRouter } from "next/router";
import RedirectPage from "../components/RedirectPage";

export default function YouTube() {
	const router = useRouter()
	if (typeof window !== 'undefined') {
		router.push("https://youtube.com/futureblur");
	}

	return (
		<RedirectPage/>
	)
}
