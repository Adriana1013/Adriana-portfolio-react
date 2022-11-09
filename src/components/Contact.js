import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";

function Contact() {
	const [formState, setFormState] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [errorMessage, setErrorMessage] = useState("");

	const { name, email, message } = formState;

	function handleChange(e) {
		if (e.target.name === "email") {
			const isValid = validateEmail(e.target.value);
			if (!isValid) {
				setErrorMessage("enter a valid email");
			} else {
				if (!e.target.value.length) {
					setErrorMessage(`${e.target.name} is required.`);
				} else {
					setErrorMessage("");
				}
			}
		}

		if (!errorMessage) {
			setFormState({ ...formState, [e.target.name]: e.target.value });
		}
	}

	function handleBlank(e) {
		if (e.target.name === "Name" || e.target.name === "Message") {
			if (!e.target.value.length) {
				setErrorMessage(`${e.target.name} is required.`);
			} else {
				setErrorMessage("");
			}
		}

		if (!errorMessage) {
			setFormState({ ...formState, [e.target.name]: e.target.value });
		}
	}

	return (
	  <section className="App">
		<div>
		  <h2>Let's Connect!</h2>
		</div>
		<div>
	<form>
		<div>
		<label htmlFor="Name">Name: </label>
          <br></br>
		  <input type="text" defaultValue={name} onBlur={handleBlank} name="Name"/>
		</div>
        <p></p>
		<div>
		  <label htmlFor="email">Email address:</label>
			<br></br>
		    <input type="email" defaultValue={email} name="email" onBlur={handleChange} />
		</div>
          <p></p>
		<div> 
          <label htmlFor="Message">Message:</label>
			<br></br>
			<textarea name="Message" defaultValue={message} onBlur={handleBlank} rows="8" columns="9" />
		</div>
		{errorMessage && (
		<p>
		{errorMessage}
		</p>
		)}
		<button type="submit">Submit</button>
	</form>
		</div>
         <hr />
	  </section>
	);
}

export default Contact;