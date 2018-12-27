import React from "react";

export default class HomePage<Props> extends React.Component<any> {

	constructor(props: Props) {
		super(props);
	}

	componentDidMount() {

		window.scrollTo(0, 0);

	}

	render() {

		return (
			<div>
				<h1>Front-End Web Development and More</h1>

				<p>
					Having been introduced to HTML in the mid-1990s, I've watched the Web grow from small, static sites to the modern world of interactive experiences.
					I've evolved along with it, having over fifteen years of professional experience in the Web space.
				</p>

				<p>
					I specialize in JavaScript-based front-end development.
					I'm currently a big fan of React, but have used numerous frameworks.
					I've also had experience&mdash;both professionally and personally&mdash;with back-end technologies and databases.
				</p>

				<p>
					Besides development, I have also worked in graphic design.
					I currently run a small design business, specializing in sports design.
				</p>

			</div>
		);

	}

}
