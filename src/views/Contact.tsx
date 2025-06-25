import { FormEvent, useState } from "react";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";

import emailjsData from "@/data/emailjs.json";

import "@/styles/contact.css";

const Contact = () => {

	const [company, setCompany] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [validationError, setValidationError] = useState(false);
	const [sendSuccess, setSendSuccess] = useState(false);
	const [sendError, setSendError] = useState(false);
	const [sending, setSending] = useState(false);

	const submitContactForm = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setSendError(false);

		if (!email || !message || !name) {
			setValidationError(true);
			return;
		}

		setSending(true);

		emailjs.send(
			emailjsData.serviceId,
			emailjsData.templateId,
			{
				company,
				email,
				message,
				name,
				phone,
			},
			{
				publicKey: emailjsData.publicKey,
			}
		).then(
			() => {
				setSending(false);
				setSendSuccess(true);
			},
			(err: EmailJSResponseStatus) => {
				setSending(false);
				setSendError(true);
				console.error(err);
			},
		)

	}

	const updateName = (event: FormEvent<HTMLInputElement>) => {
		setName(event.currentTarget.value);
	}

	const updateEmail = (event: FormEvent<HTMLInputElement>) => {
		setEmail(event.currentTarget.value);
	}

	const updatePhone = (event: FormEvent<HTMLInputElement>) => {
		setPhone(event.currentTarget.value);7
	}

	const updateCompany = (event: FormEvent<HTMLInputElement>) => {
		setCompany(event.currentTarget.value);
	}

	const updateMessage = (event: FormEvent<HTMLTextAreaElement>) => {
		setMessage(event.currentTarget.value);
	}


	return (

			<div className="contact">
				<h1>Contact Me</h1>

				{sendSuccess ?

					<p>Thank you!  Your message has been sent and I'll connect with you shortly.</p>

				:

					<form
						onSubmit={submitContactForm}
						className={sending ? "disabled" : ""}
					>

						<div className="formField">
							<label
								htmlFor="name"
							>Name (required)</label>
							<input
								id="name"
								type="text"
								value={name}
								onChange={updateName}
								disabled={sending}
								required
							/>
						</div>

						<div className="formField">
							<label
								htmlFor="email"
							>Email (required)</label>
							<input
								id="email"
								type="email"
								value={email}
								onChange={updateEmail}
								disabled={sending}
								required
							/>
						</div>

						<div className="formField">
							<label
								htmlFor="company"
							>Company</label>
							<input
								id="company"
								type="text"
								value={company}
								onChange={updateCompany}
								disabled={sending}
							/>
						</div>

						<div className="formField">
							<label
								htmlFor="phone"
							>Phone</label>
							<input
								id="phone"
								type="tel"
								value={phone}
								onChange={updatePhone}
								disabled={sending}
							/>
						</div>

						<div className="formField">
							<label
								htmlFor="phone"
							>Message (required)</label>
							<textarea
								id="message"
								value={message}
								onChange={updateMessage}
								disabled={sending}
							/>
						</div>



						<div className="buttons">
							<button
								type="submit"
								disabled={sending || !message || !name || !email}
							>Send</button>

							{sending ?
								<p>Sending...</p>
							: sendError ?
								<p className="errorMessage">There was an error sending the message.  Please refresh the page and try again.</p>
							: validationError ?
								<p className="errorMessage">Please fill all required fields.</p>
							: ""}

						</div>
					</form>


				}

			</div>

	)


}

export default Contact;
