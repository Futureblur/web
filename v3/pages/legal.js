import Head from "next/head";
import Footer from "../components/Footer";
import styles from "../styles/Legal.module.css"

export default function Legal() {
	return (
		<>
			<Head>
				<title>Legal // Futureblur</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width"/>
				<meta name="description"
					  content="Legal notice"/>
				<link rel="icon" href="/favicon.ico"/>
			</Head>

			<div className={ styles.legal } style={ {
				margin: "auto",
				display: "flex",
				flexDirection: "column",
				justifyContent: "left",
				maxWidth: "1000px",
				padding: "var(--base-padding)"
			} }>
				{/*<h1 className={ styles.header }>Legal Notice</h1>*/ }

				<h2 className={ styles.header }>Impressum</h2>
				<p>Angaben gemäß § 5 TMG</p>
				<p>Rasul Adasov <br/>
					Herschelstrasse 30<br/>
					70565 Stuttgart <br/>
				</p>
				<p>Vertreten durch: <br/>
					Rasul Adasov<br/>
				</p>
				<p>Kontakt:<br/>
					Telefon: 017683844569<br/>
					E-Mail: <a href='mailto:itsfutureblur@gmail.com'>itsfutureblur@gmail.com</a><br/></p>
				<br/>
				<h3>Haftungsausschluss: </h3>
				<h4>Haftung für Inhalte</h4>
				<p>Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit
					und
					Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß
					§ 7
					Abs.1
					TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis
					10 TMG
					sind
					wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
					Informationen zu
					überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
					Verpflichtungen
					zur
					Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon
					unberührt.
					Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten
					Rechtsverletzung
					möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend
					entfernen.</p>
				<h4>Haftung für Links</h4>
				<p>Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss
					haben.
					Deshalb
					können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
					Seiten ist
					stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden
					zum
					Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum
					Zeitpunkt
					der
					Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch
					ohne
					konkrete
					Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden
					wir
					derartige Links umgehend entfernen.</p>
				<h4>Urheberrecht</h4>
				<p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
					deutschen
					Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb
					der
					Grenzen
					des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
					Downloads
					und
					Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die
					Inhalte
					auf
					dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet.
					Insbesondere
					werden
					Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung
					aufmerksam
					werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden
					wir
					derartige Inhalte umgehend entfernen.</p>
				<p>Impressum vom <a href="https://www.impressum-generator.de">Impressum Generator</a> der
					<a href="https://www.kanzlei-hasselbach.de/standorte/bonn/"> Kanzlei Hasselbach, Bonn</a></p>
			</div>

			<Footer/>
		</>
	)
}
