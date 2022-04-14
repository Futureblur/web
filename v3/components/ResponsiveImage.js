import ExportedImage from "next-image-export-optimizer";

const ResponsiveImage = ({ className, src, alt, width = 0, height = 0, top = 0, bottom = 0 }) => {
	return (
		<ImageContainer width={ width } marginTop={ top } marginBottom={ bottom }>
			<ExportedImage src={ src } alt={ alt } className={ className } layout={ "responsive" }
						   width={ width } height={ height }/>
		</ImageContainer>
	)
}

const ImageContainer = ({ children, width, marginTop, marginBottom }) => {
	return (
		<div style={ {
			maxWidth: width,
			position: "relative",
			margin: `${ marginTop }px auto ${ marginBottom }px auto`,
			width: "100%",
			padding: "var(--base-padding)"
		} }>
			{ children }
		</div>
	)
}

export default ResponsiveImage;
