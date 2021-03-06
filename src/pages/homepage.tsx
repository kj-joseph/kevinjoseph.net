import React from "react";

export default class HomePage<Props> extends React.Component<Props> {

	constructor(props: Props) {
		super(props);
	}

	componentDidMount(): void {

		window.scrollTo(0, 0);
		document.documentElement.classList.add("nav-open");

	}

	render(): JSX.Element {

		return (
			<>
			</>
		);

	}

}
