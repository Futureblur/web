import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Button from "../components/Button";
import Footer from "../components/Footer";
import { useRef } from "react";

let sectionRef;

export default function Home() {

	sectionRef = useRef(null);

	const scrollToSection = () => {
		if (sectionRef.current) sectionRef.current.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<div className={ styles.homeRoot }>
			<Head>
				<title>Futureblur - Spring Drop!</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width"/>
				<meta name="description"
					  content="Software Engineer and creative digital artist who strives to produce high quality content."/>
			</Head>
			<img src={ "gradient-bg.png" } className={ styles.bg } alt={ "background" }/>

			<section className={ styles.main }>
				<h1 className={ styles.mega }>Create,<br/>Polish,<br/>Repeat.</h1>
				<h2 className={ styles.subtitle }>Software Engineer and creative digital artist who strives to produce
					high quality content.</h2>
				<div className={ styles.buttonWrapper }>
					<Button text={ "Start exploring!" } top={ 70 } isFunc={ true } link={ scrollToSection }/>
				</div>
			</section>

			<MeetSection/>
			<ExploreSection/>
			<MusicProjectsSection/>
			<BadlandsSection/>
			<SkillsSection/>
			<FeedbackSection/>

			<Footer/>

		</div>
	)
}

function MeetSection() {
	return (
		<section ref={ sectionRef }>
			<div className={ styles.sectionWrapper }>
				<h2 className={ styles.sectionTitle } style={ { paddingTop: "100px" } }>Meet V3</h2>
				<img src={ "../v3-banner.png" } className={ styles.exploreBanner } alt={ "Banner" } style={ {
					margin: "-50px auto", padding: "0"
				} }/>
				<p className={ styles.sectionParagraph }>Completely overhauled design, lots of new content for you to
					explore and so much more. To celebrate 2022, Futureblur is happy to announce the newest website
					update:<br/>
					<mark>V3 // Spring Drop</mark>
				</p>
			</div>
		</section>
	)
}

function ExploreSection() {
	return (
		<section>
			<div className={ styles.sectionWrapper }>
				<h2 className={ styles.sectionTitle }>Explore</h2>
				<div className={ styles.exploreBannerWrapper }>
					<img src={ "../explore-banner.png" } alt={ "Banner" } className={ styles.exploreBanner }/>
				</div>
				<p className={ styles.sectionParagraph }>Ready to dive into the world of CGI renders? I’ve got you
					covered!
					Whether you need inspiration or
					just want to walk through the virtual gallery, you’ll surely find the right shot.</p>

				<div className={ styles.buttonWrapper }>
					<Button text={ "Virtual Gallery" } link={ "https://instagram.com/itsfutureblur" }/>
				</div>
			</div>
		</section>
	)
}

function MusicProjectsSection() {
	return (
		<section>
			<div className={ styles.sectionWrapper }>
				<h2 className={ styles.sectionTitle }>Music projects</h2>
				<div className={ styles.musicCards }>
					<div className={ styles.musicCardsWrapper }>
						{ MusicCard("Phenomenon Remix", "Unknown Brain & Hoober",
							"phenomenon-cover.png", "https://youtu.be/zBKKTF6G6_8") }
						{ MusicCard("Retro Glitch", "Futureblur & RetroCyde",
							"retroglitch-cover.png", "https://youtu.be/89iXrz1Cdt8") }
					</div>
				</div>
				<p className={ styles.sectionParagraph }>Even though I have not that much experience in music
					production, I tried making some tracks for fun.
					Surprisingly, they turned out better than expected!{/* <a href={ "#" }> Learn more</a>.*/ }</p>
			</div>
		</section>
	)
}

function MusicCard(title, artist, coverURL, songURL) {
	return (
		<div className={ styles.musicCard }>
			<img className={ styles.musicCardCover } src={ coverURL } alt={ title }/>
			<a href={ songURL }>
				<div className={ styles.musicCardTitleBlur }>
					<h3 className={ styles.musicCardTitle }>{ title }</h3>
					<p className={ styles.musicCardArtist }>{ artist }</p>
				</div>
			</a>
		</div>
	)
}

function BadlandsSection() {
	return (
		<section className={ styles.badlands }>
			<div className={ styles.sectionWrapper }>
				<h2 className={ styles.sectionTitle }>Badlands</h2>
				<iframe className={ styles.videoPlayer } width="560" height="315"
						src="https://www.youtube-nocookie.com/embed/0_mZrW5zunE?controls=0"
						title="YouTube video player" frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen/>
				<p className={ styles.sectionParagraph }>
					Welcome to the Wild West. Reload your revolvers, sit back, and enjoy this short showcase video made
					in Unreal Engine 5.
				</p>
			</div>
		</section>
	)
}

function SkillsSection() {
	return (
		<section className={ styles.skillsSection }>
			<div className={ styles.sectionWrapper }>
				<h2 className={ styles.sectionTitle }>Skills</h2>
				<h3>Programming languages</h3>
				<div className={ styles.progressBarWrapper }>
					{ SkillProgressBar("C++", 60) }
					{ SkillProgressBar("C#", 90) }
					{ SkillProgressBar("Kotlin", 35) }
					{ SkillProgressBar("Java", 20) }
					{ SkillProgressBar("JS", 27) }
				</div>

				<h3>Software</h3>
				<div className={ styles.progressBarWrapper }>
					{ SkillProgressBar("Unreal Engine", 60) }
					{ SkillProgressBar("Unity Engine", 97) }
					{ SkillProgressBar("blender", 45) }
				</div>

				<p className={ styles.sectionParagraph }>
					Note that this chart may not be 100% accurate.
					<br/>The values are estimated.
				</p>
			</div>
		</section>
	)
}

function SkillProgressBar(name, progress) {
	return (
		<div className={ styles.skillProgressBarBG }>
			<div className={ styles.skillProgressBar } style={ { width: progress + "%" } }>
				<p className={ styles.skillName }>{ name }</p>
			</div>
		</div>
	)
}

function FeedbackSection() {
	return (
		<section className={ styles.feedbackSection }>
			<div className={ styles.sectionWrapper }>
				<h2 className={ styles.sectionTitle }>
					Questions & Feedback
				</h2>
				<p className={ styles.sectionParagraph }>
					Quality always comes before quantity. I make sure to take my time and create something that I can be
					proud of, before it gets released to the public. That’s why it’s even the more important to receive
					feedback, so I can keep improving!
				</p>
				<div className={ styles.buttonWrapper }>
					<ListButton text={ "Join Discord" } link={ "https://discord.gg/NtQ95K65gw" }/>
					<ListButton text={ "Contact" } link={ "https://futureblur.com/contact" } isAccent={ true }/>
				</div>
			</div>
		</section>
	)
}

function ListButton({ text, link, isAccent }) {
	return (
		<Button text={ text } link={ link } width={ "100%" } top={ 12 } bottom={ 12 } borderWidth={ 2 }
				color={ isAccent ? "var(--color-bg)" : "var(--color-fg)" }
				textColor={ isAccent ? "var(--color-primary)" : "var(--color-bg)" }
				borderColor={ isAccent ? "var(--color-primary)" : "transparent" }/>
	)
}
