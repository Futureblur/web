import { NextResponse } from "next/server";

const urls = [
	["twitter", "https://twitter.com/itsfutureblur"],
	["instagram", "https://instagram.com/itsfutureblur"],
	["youtube", "https://youtube.com/futureblur"],
	["github", "https://github.com/futureblur"],
	["twitch", "https://twitch.com/futureblur"],
	["artstation", "https://artstation.com/futureblur"],
	["reddit", "https://reddit.com/u/futureblur"],
	["linktree", "https://linktree.com/futureblur"],
	["spotify", "https://open.spotify.com/artist/3ot0eoiEubcohJl91uERYs"],
]

export default async function Middleware(req) {
	const { pathname } = req.nextUrl;

	for (const obj of urls) {
		const name = obj[0];
		const link = obj[1];

		if (pathname === '/' + name) {
			return NextResponse.redirect(link);
		}
	}

	return NextResponse.next();
}
