import styles from "../styles/RedirectPage.module.css"

export default function RedirectPage() {
	return (
		<div className={ styles.wrapper }>
			<div className={ styles.textWrapper }>
				<h1 className={ styles.title }>Redirecting</h1>
				<h2 className={ styles.subTitle }>Hold tight</h2>
			</div>
		</div>
	)
}
