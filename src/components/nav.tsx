import React from "react";
import { NavLink } from "react-router-dom";

import Behance from "images/behance-square.svg";
import GitHub from "images/github-square.svg";
import LinkedIn from "images/linkedin.svg";

import ReactSVG from "react-svg";

interface ISiteMenuProps {
	open: boolean;
	toggle: () => void;
}

export default class Nav extends React.Component<ISiteMenuProps> {

	constructor(props: ISiteMenuProps) {
		super(props);
	}

	render() {

		return (

			<nav className={this.props.open ? "open" : ""}>

				<NavLink to="/" exact={true} activeClassName="active" onClick={this.props.toggle}>
					Home
				</NavLink>

				<NavLink to="/resume" activeClassName="active" onClick={this.props.toggle}>
					Resume
				</NavLink>

				<NavLink to="/web" activeClassName="active" onClick={this.props.toggle}>
					Web Examples
				</NavLink>

				<NavLink to="/design" activeClassName="active" onClick={this.props.toggle}>
					Graphic Design
				</NavLink>

				<NavLink to="/contact" activeClassName="active" onClick={this.props.toggle}>
					Contact Me
				</NavLink>

				<div className="external">

					<a
						title="LinkedIn"
						href="https://www.linkedin.com/in/kjjoseph/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<ReactSVG
							src={LinkedIn}
						/>
					</a>
					<a
						title="GitHub"
						href="https://github.com/kj-joseph"
						target="_blank"
						rel="noopener noreferrer"
					>
						<ReactSVG
							src={GitHub}
						/>
					</a>
					<a
						title="Behance"
						href="https://www.behance.net/-kj"
						target="_blank"
						rel="noopener noreferrer"
					>
						<ReactSVG
							src={Behance}
						/>
					</a>
				</div>

			</nav>

		);

	}

}
