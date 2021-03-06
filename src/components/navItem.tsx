import React from "react";
import { NavLink } from "react-router-dom";

interface INavItemProps {
	classes?: string[];
	description?: string;
	exactMatch?: boolean;
	link: string;
	name: string;
	setNavStateFunction: (newNavState: boolean) => void;
}

export default class ResumeEntry extends React.Component<INavItemProps> {

	constructor(props: INavItemProps) {
		super(props);
	}

	render(): JSX.Element {

		return (

			<NavLink
				to={this.props.link}
				exact={this.props.exactMatch}
				className={`nav__item ${this.props.classes && this.props.classes.length ? this.props.classes.join(" ") : null}`}
				activeClassName="nav__item--active"
				onClick={this.setNavClosed}
			>

				<span className="nav__item__header">{this.props.name}</span>

				{ this.props.description ?

					<span className="nav__item__description">{this.props.description}</span>

					: null
				}

			</NavLink>

		);

	}

	setNavClosed = ():void => {

		this.props.setNavStateFunction(false);

	}

}
