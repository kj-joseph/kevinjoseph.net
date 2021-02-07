import React from "react";

export default class ContactPage<Props> extends React.Component<any> {

	constructor(props: Props) {
		super(props);
	}

	componentDidMount() {

		window.scrollTo(0, 0);

	}

	render() {

		return (
			<div>
				<h1>Contact Me</h1>

				<p>Email is, by far, the best way to contact me.</p>

				<dl>
					<dt>Email</dt>
					<dd>kevin.p.joseph@gmail.com</dd>
					<dt>Phone</dt>
					<dd>+1 612-597-2426</dd>
				</dl>


			</div>
		);

	}

}
