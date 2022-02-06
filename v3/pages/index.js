import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Button from "../components/Button";
import Footer from "../components/Footer";

export default function Home({ title, artist }) {
	return (
		<div className={ styles.homeRoot }>
			<Head>
				<title>Futureblur - Winter Drop!</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width"/>
				<meta name="description"
					  content="Software Engineer and creative digital artist who strives to produce high quality content."/>
				<link rel="icon" href="/favicon.ico"/>
			</Head>

			<section className={ styles.main }>
				<h1 className={ styles.mega }>Create,<br/>Polish,<br/>Repeat.</h1>
				<h2 className={ styles.subtitle }>Software Engineer and creative digital artist who strives to produce
					high quality content.</h2>
				<Button text={ "Start exploring!" } top={ 70 }/>
			</section>

			{ MeetSection() }
			{ ExploreSection() }
			{ MusicProjectsSection() }
			{ BadlandsSection() }
			{ SkillsSection() }
			{/*{ WhoIsSection() }*/ }
			{ FeedbackSection() }

			<Footer/>

		</div>
	)
}

function MeetSection() {
	return (
		<section>
			<div className={ styles.sectionWrapper }>
				<h2 className={ styles.sectionTitle }>Meet V3</h2>
				{/*<div className={ styles.infoCard }>
                    <span className={ styles.infoCardText }>NEW</span>
                </div>*/ }
				<iframe className={ styles.videoPlayer } width="1000" height="315"
						src="https://www.youtube-nocookie.com/embed/XjC4bnRoSO4?controls=0"
						title="YouTube video player" frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen></iframe>
				<p className={ styles.sectionParagraph }>Completely overhauled design, lots of new content for you
					to
					explore and so much more. To celebrate 2022, Futureblur is happy to announce the newest website
					update:<br/>
					<mark>V3 // Winter Drop</mark>
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
					<img src={ "../LaveCubeFinal.png" } alt={ "Lava Cube" } className={ styles.exploreBanner }/>
				</div>
				<p className={ styles.sectionParagraph }>Ready to dive into the world of CGI renders? I’ve got you
					covered!
					Whether you need inspiration or
					just want to walk through the virtual gallery, you’ll surely find the right shot.</p>
				<Button text={ "Virtual Gallery" }/>
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
						allowFullScreen></iframe>
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
					{ SkillProgressBar("JavaScript", 27) }
				</div>

				<h3>Software</h3>
				<div className={ styles.progressBarWrapper }>
					{ SkillProgressBar("Unreal Engine", 60) }
					{ SkillProgressBar("Unity Engine", 97) }
					{ SkillProgressBar("blender ", 45) }
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

function WhoIsSection() {
	return (
		<section className={ styles.whoIsSection }>
			<div className={ styles.sectionWrapper }>
				<h2 className={ styles.sectionTitle }>Who is Futureblur?</h2>
				<p className={ styles.sectionParagraph }>
					Ever wanted to learn more about Futureblur?
					Who are they, what are they doing and how did everything start?
					Luckily, the answer to all of your questions is written in a short article below.
				</p>
				<Button text={ "Take me there!" }/>
			</div>
		</section>
	)
}

function FeedbackSection() {
	return (
		<section className={ styles.feedbackSection }>
			<div className={ styles.sectionWrapper }>
				<h2 className={ styles.sectionTitle }>
					I have a question or want to give feedback. <br/>What should I do?
				</h2>
				<p className={ styles.sectionParagraph }>
					Quality always comes before quantity. I make sure to take my time and create something that I can be
					proud of, before it gets released to the public. That’s why it’s even the more important to receive
					feedback, so I can constantly improve stuff!
					<br/><br/>
					There are several ways to get in touch with Futureblur:<br/>
					Discord server or contact form.
					Choose which one you prefer :)
				</p>
				{/*<p className={ styles.boldParagraph }>
                    There is also an <a href={ "futureblur.com/faq" }>FAQ</a> if you have any questions.
                </p>*/ }
				<div className={ styles.buttonWrapper }>
					<Button text={ "Join Discord" } width={ 148 } link={ "https://google.com" }></Button>
					<Button text={ "Contact" } width={ 148 }></Button>
				</div>
			</div>
		</section>
	)
}
