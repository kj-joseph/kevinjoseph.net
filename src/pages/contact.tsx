import React from "react";
import { ReactSVG } from "react-svg";

import GitHub from "@/images/github-square.svg";
import LinkedIn from "@/images/linkedin.svg";

export default class ContactPage<Props> extends React.Component<Props> {

	constructor(props: Props) {
		super(props);
	}

	componentDidMount(): void {
		window.scrollTo(0, 0);
	}

	render(): JSX.Element {

		return (
			<div>
				<h1>Contact Me</h1>

				<p>Email is, by far, the best way to contact me.</p>

				<dl>
					<dt>Email</dt>
					<dd>kevin.p.joseph@gmail.com</dd>
					<dt>Phone</dt>
					<dd>+1 612-597-2426</dd>
					<dt>External Links</dt>
					<dd>
						<ul className="external-links">
							<li>
								<a href="https://www.linkedin.com/in/kjjoseph/" target="_blank" rel="noreferrer noopener">
									<ReactSVG
										className="external-links__linkedin"
										src={LinkedIn}
									/>
									LinkedIn</a>
							</li>
							<li>
								<a href="https://github.com/kj-joseph" target="_blank" rel="noreferrer noopener">
									<ReactSVG
										className="external-links__github"
										src={GitHub}
									/>
									GitHub</a>
							</li>
						</ul>

					</dd>
				</dl>

			</div>
		);

	}

}
