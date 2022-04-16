import { NextResponse } from "next/server";

const routes = {
	"twitter": "https://twitter.com/itsfutureblur",
	"instagram": "https://instagram.com/itsfutureblur",
	"youtube": "https://youtube.com/futureblur",
	"github": "https://github.com/futureblur",
	"twitch": "https://twitch.com/futureblur",
	"discord": "https://discord.gg/FK2mh7P72Y",
	"dsc": "https://discord.gg/FK2mh7P72Y",
	"sub": "https://youtube.com/c/Futureblur?sub_confirmation=1",
	"subscribe": "https://youtube.com/c/Futureblur?sub_confirmation=1",
	"artstation": "https://artstation.com/futureblur",
	"reddit": "https://reddit.com/u/futureblur",
	"linktree": "https://linktree.com/futureblur",
	"spotify": "https://open.spotify.com/artist/3ot0eoiEubcohJl91uERYs",
	"id": "https://youtu.be/8Q8gstqYST0",
	"retroglitch": "https://youtu.be/89iXrz1Cdt8",
	"badlands": "https://youtu.be/0_mZrW5zunE",
}

export default async function Middleware(req) {
	const { pathname } = req.nextUrl;

	// Remove first slash character
	const currentUrl = pathname.substring(1);

	if (routes[currentUrl]) {
		return NextResponse.redirect(routes[currentUrl]);
	} else {
		return NextResponse.next();
	}
}
