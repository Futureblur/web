import styles from "../styles/Header.module.css"
import { useState } from "react";

export default function Header() {
    const [navBarActive, setActive] = useState(false);
    const toggleNavBar = () => {
        setActive(!navBarActive)
    }

    return <>
        <div className={ styles.navBarWrapper }>
            <div className={ styles.navBar }>
                <div className={ styles.left }>
                    <a href={ "https://futureblur.com" } style={ { display: "block" } }>
                        <img className={ styles.logo } src={ "../futureblur-light.png" } alt={ "futureblur logo" }/>
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
    </>
}
