import React from "react";

export default class DesignPage<Props> extends React.Component<any> {

	constructor(props: Props) {
		super(props);
	}

	componentDidMount() {

		window.scrollTo(0, 0);

	}

	render() {

		return (
			<div>
				<h1>Graphic Design</h1>

				<p>
					Besides my main vocation as a web developer, I also dabble in graphic design.
					In early 2018, I launched a design side
					business: <a href="http://kjbranded.com/" target="_blank" rel="noopener noreferrer">KJ Branded</a>.
				</p>

				<p>
					You can see more examples of my graphic design work
					at my <a href="https://www.behance.net/-kj" target="_blank" rel="noopener noreferrer">portfolio on Behance</a>.
				</p>

			</div>
		);

	}

}
