import { useRouter } from "next/router";

export default function Twitter() {
	const router = useRouter()
	if (typeof window !== 'undefined') {
		router.push("https://twitter.com/byfutureblur");
	}
}
