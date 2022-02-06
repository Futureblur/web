import styles from "../styles/Button.module.css"

export default function Button({ text, link, top, bottom, width }) {
    return (
        <button className={ styles.btn }
                onClick={ () => {
                    link ? window.location.href = link : ""
                } }
                style={ { marginTop: top, marginBottom: bottom, width: width } }>
            <p
                className={ styles.text }> { text }
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
