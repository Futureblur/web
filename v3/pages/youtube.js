import { useRouter } from "next/router";

export default function YouTube() {
	const router = useRouter()
	if (typeof window !== 'undefined') {
		router.push("https://youtube.com/futureblur");
	}
}
