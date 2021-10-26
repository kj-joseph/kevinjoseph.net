import React from "react";
import { ReactSVG } from "react-svg";

import NavItem from "components/navItem";

import closeMenuButton from "images/times.svg";
import menuButton from "images/bars.svg";

interface IHeaderProps {
	setNavStateFunction: (newNavState: boolean) => void;
}

export default class Header extends React.Component<IHeaderProps> {

	constructor(props: IHeaderProps) {
		super(props);
	}

	render(): JSX.Element {

		return (

			<header
				className={document.location.pathname==="/" ? "homepage" : ""}
			>

				<div className="header__details">
					<div className="header__name">Kevin Joseph</div>
					<div className="header__title">Web Developer</div>
					<div className="header__location">San Diego, CA</div>

					<div className="header__menu-button">
						<ReactSVG
							className="header__menu-button--open"
							src={menuButton}
							onClick={this.setNavOpen}
						/>
						<ReactSVG
							className="header__menu-button--close"
							src={closeMenuButton}
							onClick={this.setNavClosed}
						/>
					</div>
				</div>

				<nav role="navigation">

					<NavItem
						name="Resume"
						link="/resume"
						classes={["nav__item--resume"]}
						setNavStateFunction={this.setNavState}
					>
						I have over fifteen years of experience in front-end web development.  Read about my journey and download a copy of my resume.
					</NavItem>

					<NavItem
						name="Examples"
						link="/web"
						classes={["nav__item--examples"]}
						setNavStateFunction={this.setNavState}
					>
						Here is a small collection of experiences I've created for employers as well as my own labors of love.
					</NavItem>

					<NavItem
						name="Contact"
						link="/contact"
						classes={["nav__item--contact"]}
						setNavStateFunction={this.setNavState}
					>
						Want to touch base?  Let's connect.
					</NavItem>

				</nav>

			</header>

		);

	}

	setNavOpen = (): void => {
		this.setNavState(true);
	}

	setNavClosed = (): void => {
		this.setNavState(false);
	}

	setNavState = (newNavState: boolean): void => {
		this.props.setNavStateFunction(newNavState);
	}

}
