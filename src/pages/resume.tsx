import React from "react";
import { Link } from "react-router-dom";
import SwipeableViews from "react-swipeable-views";

import IconPDF from "images/file-pdf.svg";
import IconWord from "images/file-word.svg";
import ReactSVG from "react-svg";

import ResumeEntry from "components/resumeEntry";
import SlideControls from "components/slideControls";

interface IResumeState {
	entryCount: number;
	entryIndex: number;
}

export default class ResumePage<Props> extends React.Component<any> {

	state: IResumeState = {
		entryCount: 9,
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
			<div className="slides">

				<div className="corner">
					<a title="Download resume in PDF format" href="/resume/Kevin%20Joseph%20-%20resume.pdf">
						<ReactSVG
							src={IconPDF}
						/>
					</a>
					<a title="Download resume in Microsoft Word format" href="/resume/Kevin%20Joseph%20-%20resume.docx">
						<ReactSVG
							src={IconWord}
						/>
					</a>
				</div>

				<h1>Resume</h1>

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

					<ResumeEntry
						company="Rain Bird"
						start="August 2018"
						location="San Diego, CA"
						title="Software Test Engineer"
						current={true}
						contract="Black Diamond Networks"
					>

						<p>
							QA testing for iQ4, a new web-based customer interface based in Angular.
							Besides task-by-task integration testing, working to implement an end-to-end testing suite using Protractor.
						</p>

						<p>Main technologies used:</p>
						<ul>
							<li>Git</li>
							<li>JavaScript / TypeScript</li>
							<li>Node.js</li>
							<li>npm</li>
							<li>Protractor</li>
							<li>Selenium</li>
							<li>Yarn</li>
						</ul>

					</ResumeEntry>

					<ResumeEntry
						company="Hiatus"
						start="April 2017"
						end="August 2018"
					>

						<p>
							In April 2017, I left Renovate America to take a short career break, spending three months traveling to over twenty countries.
							Once I returned, I enjoyed a short break at home, then began to search for a new employment opportunity.
							Unfortunately, it took much longer to find a new position than I originally expected.
						</p>

						<p>
							While on my hiatus, I launched <a href="http://kjbranded.com/" target="_blank" rel="noopener noreferrer"> KJ Branded</a>,
							my <Link to="/design">graphic design side business</Link>.
							I also started working on <Link to="/web">web projects</Link> to begin learning technologies such as React and Redux.
						</p>

					</ResumeEntry>

					<ResumeEntry
						company="Renovate America"
						start="May 2015"
						end="April 2017"
						location="San Diego, CA"
						title="Senior Web Developer"
					>

						<p>I worked on two teams during my time at Renovate America:</p>

						<p>
							The first was focused on an internal-facing toolkit for the call center.
							Much of the work focused on transferring functions from an outdated native Java desktop app to the web app.
							Most of the front-end work was within AngularJS (1.x) and Microsoft .NET Razor.
							Occasionally, I needed to modify the C#-based API in order to get data to ingest on the front end.
						</p>

						<p>
							One major project during my time on this team was creating an interface for adding products to a customer's project,
							moving it from a jQuery-heavy independent page that was not user friendly to an integrated part of the larger toolkit.
							The leaders of the call center were very happy with the new interface,
							noting that it would make that portion of their responsibilities much easier.
						</p>

						<p>
							The second team maintained the customer-facing marketing website.
							This site was built on SiteCore for content management, and also included AngularJS and Razor in the front-end stack.
						</p>

						<p>Main technologies used:</p>
						<ul>
							<li>AngularJS (1.x)</li>
							<li>Bootstrap</li>
							<li>CSS / Sass</li>
							<li>Git</li>
							<li>Gulp</li>
							<li>HTML 5</li>
							<li>JavaScript</li>
							<li>Kendo UI</li>
							<li>Microsoft .NET Razor</li>
							<li>Microsoft C#</li>
							<li>Microsoft TFS</li>
						</ul>

					</ResumeEntry>

					<ResumeEntry
						company="Best Buy"
						start="September 2013"
						end="March 2015"
						location="Richfield, MN"
						title="Web Developer"
						contract="TEKSystems"
					>

						<p>
							I was part of a small development group working on the analytics for the main BestBuy.com website.
							Working with the UI/UX developers, we would take in information from the site and package it to send to Adobe Analytics for tracking.
						</p>

						<p>
							At one point we completely overhauled our codebase, moving from two large, mostly duplicated, jQuery-infused files
							to a module-based framework using RequireJS and integrated the new framework with Signal Tag Manager.
						</p>

						<p>Main technologies used:</p>
						<ul>
							<li>Adobe Analytics</li>
							<li>Git</li>
							<li>HTML</li>
							<li>JavaScript</li>
							<li>Jenkins</li>
							<li>jQuery</li>
							<li>Lodash</li>
							<li>RequireJS</li>
							<li>Signal Tag Manager</li>
						</ul>

					</ResumeEntry>

					<ResumeEntry
						company="Target"
						start="June 2013"
						end="August 2013"
						location="Minneapolis, MN"
						title="Web Developer"
						contract="TEKSystems"
					>

						<p>
							While I was hired to code solutions for Adobe Analytics tracking, the position ended up being more of a business analysis role,
							managing tracking needs for Target.com.
						</p>

					</ResumeEntry>

					<ResumeEntry
						company="Capella University"
						start="January 2013"
						end="March 2013"
						location="Minneapolis, MN"
						title="Web Developer"
						contract="Horizontal Integration"
					>

						<p>
							I was part of a team supporting and enhancing iGuide, a web portal for Capella students built on Liferay.
							My project was to implement the front-end interface for a new method for students to register for their classes online.
						</p>

						<p>Main technologies used:</p>
						<ul>
							<li>HTML</li>
							<li>CSS</li>
							<li>JavaScript</li>
							<li>JSP</li>
						</ul>

					</ResumeEntry>

					<ResumeEntry
						company="Ambient Consulting"
						start="September 2012"
						end="November 2012"
						location="Minneapolis, MN"
						title="Web Developer"
						contract="Ambient Consulting"
					>

						<p>
							A short-term contract working with Preventice, developing a medical web application.
						</p>

						<p>Main technologies used:</p>
						<ul>
							<li>CSS</li>
							<li>Dojo</li>
							<li>HTML</li>
							<li>JavaScript</li>
							<li>jQuery</li>
							<li>JSP</li>
						</ul>

					</ResumeEntry>

					<ResumeEntry
						company="Digital River"
						start="February 2011"
						end="September 2012"
						location="Minnetonka, MN"
						title="Web Developer"
					>

						<p>
							Working within an in-house content management framework, I worked on customized e-commerce sites for Digital River clients.
							We completed a complete design of THQ's store, including an integrated single sign on.
						</p>

						<p>Main technologies used:</p>
						<ul>
							<li>CSS</li>
							<li>HTML</li>
							<li>JavaScript</li>
							<li>jQuery</li>
						</ul>

					</ResumeEntry>

					<ResumeEntry
						company="Internet Broadcasting"
						start="January 2008"
						end="February 2011"
						location="St. Paul, MN"
						title="Web Developer"
					>

						<p>
							Internet Broadcasting (now known as Lakana) is an online publisher for media companies, specializing in television station websites.
							I worked on front-end enhancements for various properties, developing within an in-house content management framework.
						</p>

						<p>
							While the lead front-end developer for the Cox Media sites,
							I was responsible for (among other projects) the implementation of Adobe Analytics tracking code across their sites
							as well as adding a new ad unit framework.
						</p>

						<p>Main technologies used:</p>
						<ul>
							<li>CSS</li>
							<li>HTML</li>
							<li>JavaScript</li>
							<li>XML / XSLT</li>
							<li>YUI</li>
						</ul>

					</ResumeEntry>

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
