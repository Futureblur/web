import styles from "../styles/Footer.module.css"

export default function Footer() {
	return (
		<footer className={ styles.footerRoot }>
			<div className={ styles.titleWrapper }>
				<div className={ styles.line }/>
				<h3 className={ styles.futureblur }>Futureblur</h3>
				<div className={ styles.line }/>
			</div>
			<div className={ styles.socialsWrapper }>
				{ LinkButton("https://futureblur.com/instagram", "logo-instagram") }
				{ LinkButton("https://futureblur.com/twitter", "logo-twitter") }
				{ LinkButton("https://futureblur.com/youtube", "logo-youtube") }
			</div>

			<div className={ styles.linksWrapper }>
				<div className={ styles.footerSection }>
					<span className={ styles.boldHeader }>EXPLORE</span>
					<a className={ styles.linkItem } href={ "https://instagram.com/itsfutureblur" }>Virtual Gallery</a>
					{/*<a className={ styles.linkItem } href={ "https://futureblur.com/story" }>Story</a>*/ }
					<a className={ styles.linkItem } href={ "https://github.com/futureblur" }>Open Source</a>
					<a className={ styles.linkItem }
					   href={ "https://youtube.com/playlist?list=PLF32kULKiTMRpXWteNeJTRiAx7yxiRfhb" }>Exclusives</a>
				</div>
				<div className={ styles.footerSection }>
					<span className={ styles.boldHeader }>SUPPORT</span>
					<a className={ styles.linkItem } href={ "https://futureblur.com/discord" }>Join the community</a>
					<a className={ styles.linkItem } href={ "https://futureblur.com/contact" }>Contact</a>
					<a className={ styles.linkItem } href={ "https://futureblur.com/legal" }>Legal Notice</a>
					{/*<a className={ styles.linkItem } href={ "https://futureblur.com/privacy" }>Privacy Policy</a>*/ }
				</div>
			</div>

			<span className={ styles.version }>Version 3.3 (Spring Drop)</span>
			<span className={ styles.copyright }>Copyright © 2022 Futureblur. All rights reserved.</span>
		</footer>
	)
}

function LinkButton(url, icon) {
	return (
		<a href={ url }>
			<ion-icon name={ icon } size="large"/>
		</a>
	)
}
