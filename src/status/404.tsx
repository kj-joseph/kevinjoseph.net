import React from "react";

export default class Error404<Props> extends React.Component<Props> {

	constructor(props: Props) {
		super(props);
	}

	componentDidMount(): void {

		window.scrollTo(0, 0);

	}

	render(): JSX.Element {

		return (
			<div>
				<h1>404</h1>
				<h2>Page Not Found</h2>
				<p>Sorry, but we couldn't find that.  Please try again.</p>
			</div>
		);

	}

}
