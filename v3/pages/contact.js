import styles from "../styles/Contact.module.css"
import Footer from "../components/Footer";
import Button from "../components/Button";
import { useEffect, useRef } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

//const apiURL = "http://localhost:8000";
const apiURL = "https://futureblur-api.herokuapp.com";
const colorGray = "var(--color-gray)";
const colorError = "var(--color-error)";

export default function Contact({ props }) {
	const emailRef = useRef(null);
	const emailErrorRef = useRef(null);
	const messageRef = useRef(null);
	const messageErrorRef = useRef(null);
	const captchaRef = useRef(null);
	const captchaErrorRef = useRef(null);
	const formRef = useRef(null);
	const successMessage = useRef(null);

	useEffect(() => {
		successMessage.current.style.display = "none";
	}, []);

	const router = useRouter();
	let rateLimited;

	if (!props) {
		rateLimited = true;
	}

	const validateForm = async event => {
		event.preventDefault();

		//Refresh the page if button is clicked (previously submit)
		if (rateLimited) {
			router.reload();
			return;
		}

		//Reset style
		if (captchaRef.current)
			captchaRef.current.style.borderColor = colorGray;

		emailRef.current.style.borderColor = colorGray;
		messageRef.current.style.borderColor = colorGray;
		emailErrorRef.current.style.display = "none";
		messageErrorRef.current.style.display = "none";
		captchaErrorRef.current.style.display = "none";

		let valid = true;

		if (!validateEmail(emailRef.current.value)) {
			emailRef.current.style.borderColor = colorError;
			emailErrorRef.current.style.display = "block";
			valid = false;
		}

		if (!messageRef.current.value.toString()) {
			messageRef.current.style.borderColor = colorError;
			messageErrorRef.current.style.display = "block";
			valid = false;
		}

		if (captchaRef.current) {
			if (!captchaRef.current.value.toString()) {
				captchaRef.current.style.borderColor = colorError;
				captchaErrorRef.current.style.display = "block";
				valid = false;
			}
		} else {
			valid = false;
		}

		if (!valid)
			return;

		//Validate captcha
		const res = await fetch(apiURL + `/captcha/validate?id=${ props.data.id }&code=${ captchaRef.current.value }`);
		if (res.status !== 429) {
			const data = await res.json();
			if (!data.valid) {
				if (captchaRef.current) {
					captchaRef.current.style.borderColor = colorError;
					captchaErrorRef.current.innerText = "Incorrect input"
					captchaErrorRef.current.style.display = "block";
				}
			} else {
				// Input is valid
				const reqBody = JSON.stringify({ address: emailRef.current.value, message: messageRef.current.value });
				const emailReq = await fetch(apiURL + "/contactEmail", {
					method: "POST", body: reqBody, headers: {
						'Content-Type': 'application/json'
					},
				}).catch((err) => console.log(err));

				if (emailReq.status === 200) {
					formRef.current.style.display = "none";
					successMessage.current.style.display = "flex";
					console.log("Submitted! Email: " + emailRef.current.value);
				} else {
					console.log("Something went wrong. Status: ", emailReq.status);
				}
			}

		} else {
			rateLimited = true;
		}

		await router.replace(router.asPath);
	};

	return (
		<div>
			<Head>
				<title>Contact // Futureblur</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width"/>
				<meta name="description"
					  content="Software Engineer and creative digital artist who strives to produce high quality content."/>
			</Head>

			<h1 className={ styles.title } style={ { marginBottom: "-5px" } }>Contact</h1>

			<div className={ styles.formWrapper }>
				<form className={ styles.formClass } onSubmit={ validateForm } ref={ formRef }>
					<label className={ styles.formLabel }>Email</label>
					<input className={ styles.formInputField } placeholder={ "example@gmail.com" } type={ "email" }
						   ref={ emailRef }/>
					<label className={ styles.formErrorLabel } ref={ emailErrorRef }>Invalid email address</label>

					<label className={ styles.formLabel }>Message</label>
					<textarea className={ styles.formInputField } placeholder={ "How can we help you?" }
							  ref={ messageRef } style={ { height: "100px" } }/>
					<label className={ styles.formErrorLabel } ref={ messageErrorRef }>This field is required</label>

					<label className={ styles.formLabel }>Captcha</label>
					{ CaptchaComponent(props, captchaRef, rateLimited) }
					<label className={ styles.formErrorLabel } ref={ captchaErrorRef }>Please solve the captcha</label>

					<div style={ {
						display: "flex", justifyContent: "center", marginTop: "40px", marginBottom: "90px"
					} }>

						<Button text={ rateLimited ? "Refresh" : "Submit" } width={ "100%" }/>
					</div>
				</form>
			</div>

			<div ref={ successMessage }
				 style={ {
					 display: "flex",
					 justifyContent: "center",
					 margin: "100px auto",
					 padding: "var(--base-padding)"
				 } }>
				<div style={ {
					display: "inline-flex",
					padding: "10px 20px",
					background: "var(--color-primary-dark)",
					borderColor: "var(--color-primary)",
					borderWidth: "1px",
					borderRadius: "8px",
					borderStyle: "solid",
					boxShadow: "0 10px 50px rgba(109, 1, 231, 0.7)"
				} }>
					<div style={ {
						display: "flex",
						alignItems: "center",
						paddingRight: "10px",
						color: "white",
						fontSize: "26px"
					} }>
						<ion-icon name="checkmark-circle-outline"/>
					</div>
					<p style={ { color: "var(--color-fg)" } }>
						Your message was sent! We will reach out to you as soon as possible.
					</p>
				</div>
			</div>

			<Footer/>
		</div>
	)
}

export async function getStaticProps() {
	const headers = new Headers({ "width": "80", "height": "40" });
	const response = await fetch(apiURL + "/captcha", { headers });
	const status = response.status;

	if (status === 200) {
		const data = await response.json();
		return {
			props: { props: data }
		}
	} else {
		return { props: {} }
	}
}

function CaptchaComponent(props, captchaRef, isLimited) {
	//Check if we aren't being rate limited
	if (!isLimited) {
		return (
			<div>
				<div style={ { userSelect: "none" } }>
					<img src={ props.data.image } alt={ "" }
						 style={ {
							 filter: "invert(1)", borderRadius: "6px", pointerEvents: "none", userSelect: "none"
						 } }/>
				</div>
				<input className={ styles.formInputField } placeholder={ "Enter the generated code above" }
					   ref={ captchaRef }/>
			</div>
		)
	} else {
		return (
			<div>
				<label className={ styles.formLabel }
					   style={ { color: colorError, fontWeight: "600", margin: "10px auto" } }>
					To prevent bots, we limit the number of captchas you can generate in a short period of time. Please
					try again later.</label>
			</div>
		)
	}
}

const validateEmail = (email) => {
	const pattern = /\S+@\S+\.\S+/;
	return pattern.test(email) && email.toString().length > 0;
}
