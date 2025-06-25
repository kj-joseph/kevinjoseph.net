import { NavLink } from "react-router";

import styled from "styled-components";

const StyledNavItem = styled(NavLink).attrs<{$image: string}>(props => ({ $image: props.$image }))`
	position: relative;
	display: block;
	color: var(--offWhite);
	font-size: 1.7rem;
	font-weight: var(--fontBold);
	text-decoration: none;
	padding: 60px 10px 10px;
	/* margin-bottom: 20px; */
	border-width: 5px;
	border-style: solid;
	border-image: var(--gradient);
	border-image-slice: 1;
	background-image:
		linear-gradient(to top, var(--black) 1rem, rgba(0, 0, 0, .2) 3.5rem),
		url("${props => props.$image}")
	;
	background-size:
		contain,
		cover;
	background-repeat:
		no-repeat,
		no-repeat;
	background-position:
		center center,
		center center;


	&:hover, &:active, &:focus {
		border-color: var(--offWhite);
		border-image: none;
	}

	&:last-child {
		margin-bottom: 0;
	}

	@media (min-width: 640px) {
		width: calc(50% - 40px);
		/* flex-basis: calc(50% - 40px); */
	}

`;

const NavItem = ({title, link, image, closeNavOnClick}: {title: string, link: string, image: string, closeNavOnClick: () => void}) => {

	return (
		<StyledNavItem to={link} className="menuItemText" $image={image} onClick={closeNavOnClick}>
			{title}
		</StyledNavItem>
	)

}

export default NavItem;
