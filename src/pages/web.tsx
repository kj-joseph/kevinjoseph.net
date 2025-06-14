import React from "react";
import SwipeableViews from "react-swipeable-views";

import SlideControls from "@/components/slideControls";
import WebExample from "@/components/webExample";

interface IWebState {
	entryCount: number;
	entryIndex: number;
}

export default class WebPage<Props> extends React.Component<Props> {

	state: IWebState = {
		entryCount: 5,
		entryIndex: 0,
	};

	constructor(props: Props) {
		super(props);

		this.changeSlide = this.changeSlide.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	componentDidMount(): void {

		window.scrollTo(0, 0);

	}

	render(): JSX.Element {

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
						github="kj-joseph/rollcal"
					>

						<p>
							Searchable calendar for roller derby events. Allows users to create accounts to add their own events. I created everything for the site, including graphics, a front-end React app, a back-end API using Express and Node.js, and automated deployment using Travis CI.
						</p>

						<p><strong>Main technologies used:</strong></p>

						<ul className="columnList">
							<li>React</li>
							<li>Redux</li>
							<li>JavaScript</li>
							<li>TypeScript</li>
							<li>Express</li>
							<li>Node.js</li>
							<li>MySQL</li>
							<li>npm</li>
							<li>HTML</li>
							<li>CSS</li>
							<li>Sass</li>
							<li>Webpack</li>
							<li>Babel</li>
						</ul>

					</WebExample>

					<WebExample
						url="http://kjbranded.com/"
						title="KJ Branded"
						launched="March 2018"
					>

						<p>
							The site for my dormant freelance graphic design company.
						</p>

						<p><strong>Main technologies used:</strong></p>

						<ul className="columnList">
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
						version="6.1.3"
						versionLaunched="May 2025"
						launched="2004"
						github="kj-joseph/kevinjoseph.net"
					>

						<p>
							This site.
						</p>

						<ul>
							<li>Switched in late 2018 from AngularJS to React.</li>
							<li>Changed from Webpack to Vite in May 2024.</li>
						</ul>

						<p><strong>Main technologies used:</strong></p>

						<ul className="columnList">
							<li>React</li>
							<li>JavaScript</li>
							<li>TypeScript</li>
							<li>HTML</li>
							<li>CSS</li>
							<li>Sass</li>
							<li>Vite</li>
							<li>npm</li>
						</ul>

					</WebExample>


					<WebExample
						title="Esports broadcast overlay for Rocket League"
						url="https://youtu.be/6-AsQXi23o0?t=274"
						version="1.0.0"
						versionLaunched="December 2024"
						launched="2022"
						github="RSC-NA/stream-overlay-v2"
					>

						<p>
							This overlay receives raw data from the game via a WebSocket connection, then sits on top of the game screen during live broadcasts to display the data in a graphical format, showing information like the score, time remaining, and player stats. The overlay system also includes pre-game matchup and statistics as well as post-game stats for all players.
						</p>
						<p>
							I&apos;ve launched a version of my overlay for two leagues, customizing the visual style for each as well as bringing in season-to-date stats for use during the pregame; one does this via an API, while the other gets data from Google Sheets
						</p>

						<p><strong>Main technologies used:</strong></p>

						<ul className="columnList">
							<li>JavaScript</li>
							<li>Node.js</li>
							<li>npm</li>
							<li>React</li>
							<li>Vite</li>
							<li>Webpack</li>
							<li>WebSockets</li>
						</ul>

					</WebExample>

					<WebExample
						url="https://study.com/pages/About_Us.html"
						title="Study.com About Us section"
						launched="March 2020"
					>

						<p>
							A revamp of the About Us section on the Study.com site, using JSP, JSTL, and Less.
						</p>

						<p><strong>Main technologies used:</strong></p>

						<ul className="columnList">
							<li>JSP / JSTL</li>
							<li>Less</li>
							<li>TypeScript / JavaScript</li>
						</ul>

					</WebExample>

					<WebExample
						url="https://study.com/texes"
						title="Study.com TEXES landing page"
						launched="August 2020"
					>

						<p>
							One of a number of &quot;long-form hubs&quot; I created while at Study.com, based on designs from in-house designers.  We collaborated to create reusable components/styles to ease creation of future pages while still allowing for creative flourishes to be added.
						</p>

						<p><strong>Main technologies used:</strong></p>

						<ul className="columnList">
							<li>JSP / JSTL</li>
							<li>Less</li>
							<li>TypeScript / JavaScript</li>
						</ul>

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
