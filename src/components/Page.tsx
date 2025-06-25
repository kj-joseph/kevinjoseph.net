import { ReactNode } from "react";

import styled from "styled-components";

const StyledPage = styled.div.attrs<{$image: string}>(props => ({ $image: props.$image }))`
	position: relative;
	padding: calc(var(--pageBgHeight)) 20px 0;

	&:after {
		display: block;
		content: " ";
		width: 100vw;
		height: var(--pageBgHeight);
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;

	background-image:
		linear-gradient(to top, var(--bgColor) 0, rgba(0, 0, 0, 0) 70%),
		url("${props => props.$image}");
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

	}

	.pageContents {
		margin: 0 auto;
		max-width: 1024px;
	}

`;


const Page = ({
		children,
		pageBackground,
	}:{
		children: ReactNode,
		pageBackground: string,
	}) => {

	return (

		<StyledPage
			className="page"
			$image={pageBackground}
		>
			<div className="pageContents">
				{children}
			</div>
		</StyledPage>

	)


}

export default Page;
