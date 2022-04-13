import styles from "../styles/Button.module.css"

export default function Button({
								   text,
								   link,
								   isFunc,
								   top,
								   bottom,
								   width,
								   color = "var(--color-fg)",
								   textColor = "var(--color-bg)",
								   borderColor,
								   borderWidth = 2
							   }) {
	return (
		<button className={ styles.btn }
				onClick={ isFunc ? link : () => {
					link ? window.location.href = link : ""
				} }
				style={ {
					marginTop: top,
					marginBottom: bottom,
					width: width,
					border: `${ borderWidth }px solid ${ borderColor }`,
					background: color
				} }>
			<p className={ styles.text } style={ { background: color, color: textColor } }>
				{ text }
			</p>
		</button>
	)
}

function GetWidth(width) {
	if (!width) return "";

	if (width.toString().endsWith("%")) {
		return `${ width }`
	} else {
		return width;
	}
}
