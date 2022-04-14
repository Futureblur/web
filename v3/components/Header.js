import styles from "../styles/Header.module.css"
import { useState } from "react";
import ExportedImage from "next-image-export-optimizer";

export default function Header() {
	const [navBarActive, setActive] = useState(false);
	const toggleNavBar = () => {
		setActive(!navBarActive)
	}

	return (
		<div className={ styles.navBarWrapper }>
			<div className={ styles.navBar }>
				<div className={ styles.left }>
					<a href={ "https://futureblur.com" } style={ { display: "flex" } }>
						{/*<img className={ styles.logo } src={ "../images/Futureblur_Logo_White.svg" }*/ }
						{/*	 alt={ "Futureblur Logo" }/>*/ }
						<div className={ styles.logo }>
							<ExportedImage src={ "../images/Futureblur_Logo_White.svg" } alt={ "Futureblur Logo" }
										   layout={ "fixed" } width={ 188 } height={ 30 }/>
						</div>
						<div className={ styles.logoIcon }>
							<ExportedImage src={ "../images/Futureblur_Icon_White.svg" } alt={ "Futureblur Logo" }
										   layout={ "fixed" } width={ 64 } height={ 30 }/>

							{/*<img className={ styles.logoIcon } src={ "../images/Futureblur_Icon_White.svg" }*/ }
							{/*	 alt={ "Futureblur Logo" }/>*/ }
						</div>
					</a>
				</div>
				{
					navBarActive ?
						<div className={ styles.burgerActive } onClick={ toggleNavBar }/> :
						<div className={ styles.burger } onClick={ toggleNavBar }/>
				}
				{
					navBarActive ?
						<div className={ styles.rightActive }>
							<a className={ styles.navLink } href={ "https://instagram.com/itsfutureblur" }>Virtual
								Gallery</a>
							<a className={ styles.navLink } href={ "#" }>About</a>
							<a className={ styles.navLink } href={ "https://futureblur.com/contact" }>Contact</a>
						</div> :

						<div className={ styles.right }>
							<a className={ styles.navLink } href={ "https://instagram.com/itsfutureblur" }>Virtual
								Gallery</a>
							<a className={ styles.navLink } href={ "#" }>About</a>
							<a className={ styles.navLink } href={ "https://futureblur.com/contact" }>Contact</a>
						</div>
				}

			</div>
		</div>
	)
}
