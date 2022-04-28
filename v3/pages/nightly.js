import { useRouter } from "next/router";
import RedirectPage from "../components/RedirectPage";

export default function Discord() {
	const router = useRouter()
	if (typeof window !== 'undefined') {
		router.push("https://github.com/NightlyEngine");
	}

	return (
		<RedirectPage/>
	)
}
