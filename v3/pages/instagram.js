import { useRouter } from "next/router";

export default function Instagram() {
	const router = useRouter()
	if (typeof window !== 'undefined') {
		router.push("https://instagram.com/itsfutureblur");
	}
}
