import React from "react";
import { NavLink } from "react-router-dom";

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

				<NavLink to="/tech" activeClassName="active" onClick={this.props.toggle}>
					Technologies
				</NavLink>

				<NavLink to="/design" activeClassName="active" onClick={this.props.toggle}>
					Graphic Design
				</NavLink>

				<NavLink to="/interests" activeClassName="active" onClick={this.props.toggle}>
					Other Interests
				</NavLink>

				<NavLink to="/contact" activeClassName="active" onClick={this.props.toggle}>
					Contact Me
				</NavLink>

			</nav>

		);

	}

}
