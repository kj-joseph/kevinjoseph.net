import React from "react";

import NavItem from "components/navItem";

interface IHeaderProps {
	setNavStateFunction: (newNavState: boolean) => void;
}

export default class Header extends React.Component<IHeaderProps> {

	constructor(props: IHeaderProps) {
		super(props);
	}

	render(): JSX.Element {

		return (

			<header>

				<div className="header__details">
					<div className="header__name">Kevin Joseph</div>
					<div className="header__title">Web Developer</div>
					<div className="header__location">San Jose, CA</div>
				</div>

				<nav role="navigation">

					<NavItem
						name="Experience"
						link="/resume"
						description="The story of my professional development, also available as a downloadable resume"
						classes={["nav__item--resume"]}
						setNavStateFunction={this.setNavState}
					/>

					<NavItem
						name="Examples"
						link="/web"
						description="A few samples of work I've done over the years, in professional settings as well as labors of love"
						classes={["nav__item--examples"]}
						setNavStateFunction={this.setNavState}
					/>

					<NavItem
						name="Contact"
						link="/contact"
						description="How you can touch base with me as well as a few external links"
						classes={["nav__item--contact"]}
						setNavStateFunction={this.setNavState}
					/>

				</nav>

			</header>

		);

	}

	setNavState = (newNavState: boolean): void => {
		this.props.setNavStateFunction(newNavState);
	}

}
