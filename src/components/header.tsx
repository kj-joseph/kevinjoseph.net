import React from "react";
import ReactSVG from "react-svg";

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

					<ReactSVG
						className={`menuIcon${this.state.menuOpen ? " open" : ""}`}
						src={menuIcon}
						onClick={this.toggleMenu}
					/>

					<div className="headerText">
						<span className="name">Kevin Joseph</span><br />
						Web Developer<br />
						San Jose, CA, USA<br />
					</div>

				</header>

				<Nav
					open={this.state.menuOpen}
					toggle={this.toggleMenu}
				/>

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
