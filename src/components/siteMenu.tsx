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

				<NavLink to="/" exact={true} title="Home" activeClassName="active">
					Home
				</NavLink>

				<NavLink to="/x" exact={true} title="Home" activeClassName="active">
					Home
				</NavLink>

			</nav>

		);

	}

}
