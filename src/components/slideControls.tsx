import React from "react";

import IconFirst from "images/angle-double-left.svg";
import IconLast from "images/angle-double-right.svg";
import IconBack from "images/angle-left.svg";
import IconNext from "images/angle-right.svg";
import { ReactSVG } from "react-svg";

interface ISlideControlProps {
	changeSlide: (event: React.MouseEvent<HTMLAnchorElement>) => void;
	index: number;
	total: number;
}

export default class SlideControls extends React.Component<ISlideControlProps> {

	constructor(props: ISlideControlProps) {
		super(props);
	}

	render() {

		return (

			<div className="slideControls">

				<a
					className={this.props.index === 0 ? "disabled" : ""}
					data-direction="first"
					title="Go to first item"
					href=""
					onClick={this.props.changeSlide}
				>
					<ReactSVG
						src={IconFirst}
					/>
				</a>

				<a
					className={this.props.index === 0 ? "disabled" : ""}
					data-direction="back"
					title="Go to previous item"
					href=""
					onClick={this.props.changeSlide}
				>
					<ReactSVG
						src={IconBack}
					/>
				</a>

				<a
					className={this.props.index === this.props.total - 1 ? "disabled" : ""}
					data-direction="next"
					title="Go to next item"
					href=""
					onClick={this.props.changeSlide}
				>
					<ReactSVG
						src={IconNext}
					/>
				</a>

				<a
					className={this.props.index === this.props.total - 1 ? "disabled" : ""}
					data-direction="last"
					title="Go to last item"
					href=""
					onClick={this.props.changeSlide}
				>
					<ReactSVG
						src={IconLast}
					/>
				</a>

			</div>

		);

	}

}
