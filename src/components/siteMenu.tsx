import React from "react";
import { NavLink } from "react-router-dom";

interface ISiteMenuProps {
	open: boolean;
}

export default class SiteMenu extends React.Component<ISiteMenuProps> {

	constructor(props: ISiteMenuProps) {
		super(props);
	}

	render() {

		return (

			<nav className={this.props.open ? "open" : ""}>

				<NavLink to="/" exact={true} activeClassName="active">
					Home
				</NavLink>

				<NavLink to="/resume" activeClassName="active">
					Resume
				</NavLink>

				<NavLink to="/web" activeClassName="active">
					Web Examples
				</NavLink>

				<NavLink to="/tech" activeClassName="active">
					Technologies
				</NavLink>

				<NavLink to="/design" activeClassName="active">
					Graphic Design
				</NavLink>

				<NavLink to="/contact" activeClassName="active">
					Contact Me
				</NavLink>

			</nav>

		);

	}

}
