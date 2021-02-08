import React from "react";
import { ReactSVG } from "react-svg";

import menuIcon from "images/bars.svg";

import Nav from "components/nav";

interface IHeaderState {
	menuOpen: boolean;
}

export default class Header<Props> extends React.Component<any> {

	state: IHeaderState = {
		menuOpen: false,
	};

	constructor(props: Props) {
		super(props);

		this.toggleMenu = this.toggleMenu.bind(this);
	}

	render() {

		return (

			<>

				<header>

					<div className="header--name">Kevin Joseph</div>
					<div className="header--title">Web Developer</div>
					<div className="header--location">San Jose, CA</div>

				</header>

			</>

		);

	}

	toggleMenu(): void {

		const menuOpen = !this.state.menuOpen;

		document.documentElement.classList.toggle("noscroll");

		this.setState({
			menuOpen,
		});

	}


}
