import React from "react";
import SwipeableViews from "react-swipeable-views";

import SlideControls from "components/slideControls";
import WebExample from "components/webExample";

interface IWebState {
	entryCount: number;
	entryIndex: number;
}

export default class WebPage<Props> extends React.Component<any> {

	state: IWebState = {
		entryCount: 6,
		entryIndex: 0,
	};

	constructor(props: Props) {
		super(props);

		this.changeSlide = this.changeSlide.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	componentDidMount() {

		window.scrollTo(0, 0);

	}

	render() {

		return (
			<div>

				<h1>Web Examples</h1>

				<SlideControls
					changeSlide={this.changeSlide}
					index={this.state.entryIndex}
					total={this.state.entryCount}
				/>

				<SwipeableViews
					index={this.state.entryIndex}
					resistance={true}
					animateHeight={true}
					onChangeIndex={this.handleChange}
				>

					<WebExample
						url="https://www.roll-cal.com/"
						title="Roll-Cal"
						launched="November 2018"
						github="rollcal"
					>

						<p>
							Searchable calendar for roller derby events.  Allows users to create accounts to add their own events.
						</p>
						<p>
							I created everything for the site: graphics, front-end web app, API, and automated deployment using Travis CI.
						</p>

						<ul>
							<li>Babel</li>
							<li>Express</li>
							<li>MySQL</li>
							<li>Node.js</li>
							<li>npm</li>
							<li>React</li>
							<li>Redux</li>
							<li>Sass</li>
							<li>TypeScript / JavaScript</li>
							<li>Webpack</li>
						</ul>

					</WebExample>

					<WebExample
						url="http://kjbranded.com/"
						title="KJ Branded"
						launched="March 2018"
					>

						<p>
							The site for my graphic design company.
						</p>

						<ul>
							<li>Babel</li>
							<li>JavaScript</li>
							<li>npm</li>
							<li>React</li>
							<li>Sass</li>
							<li>Webpack</li>
						</ul>

					</WebExample>

					<WebExample
						url="https://kevinjoseph.net/"
						title="KevinJoseph.net"
						version="4.0"
						versionLaunched="December 2018"
						launched="2004"
						github="kevinjoseph.net"
					>

						<p>
							This site.  Switched in late 2018 from AngularJS to React.
						</p>

						<ul>
							<li>Babel</li>
							<li>npm</li>
							<li>React</li>
							<li>Sass</li>
							<li>TypeScript / JavaScript</li>
							<li>Webpack</li>
						</ul>

					</WebExample>

					<WebExample
						title="Support Your Local Club"
						launched="December 2013"
						github="supportyourlocalclub"
						inactive={true}
					>

						<p>
							Designed as a site to allow people to locate soccer teams in the US and Canada, but never caught on.
						</p>

						<ul>
							<li>CodeIgniter</li>
							<li>Google Maps API</li>
							<li>jQuery</li>
							<li>MySQL</li>
							<li>PHP</li>
							<li>WordPress</li>
						</ul>

					</WebExample>

					<WebExample
						url="http://store.turbine.com/store/turbine/en_US/list/categoryID.58516100/themeid.29252200"
						title="Dungeons &amp; Dragons Online Market"
						launched="2012"
					>

						<p>
							Site theme implemented while working at Digital River.
						</p>

					</WebExample>

					<WebExample
						url="http://store.turbine.com/store/turbine/en_US/list/categoryID.58516200/themeid.28979900"
						title="The Lord of the Rings Online Market"
						launched="2012"
					>

						<p>
							Site theme implemented while working at Digital River.
						</p>

					</WebExample>

				</SwipeableViews>

			</div>
		);

	}

	changeSlide(event: React.MouseEvent<HTMLAnchorElement>): void {

		event.preventDefault();

		const direction = event.currentTarget.dataset.direction;
		const index = this.state.entryIndex;

		switch (direction) {

			case "first":
				this.setState({
					entryIndex: 0,
				});

				break;

			case "back":
				this.setState({
					entryIndex: index ? index - 1 : 0,
				});

				break;

			case "next":
				this.setState({
					entryIndex: index === this.state.entryCount - 1 ? index : index + 1,
				});

				break;

			case "last":
				this.setState({
					entryIndex: this.state.entryCount - 1,
				});

				break;

		}

	}

	handleChange(value: number): void {

		this.setState({
			entryIndex: value,
		});

	}

}
