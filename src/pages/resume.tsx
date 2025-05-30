import React from "react";
import SwipeableViews from "react-swipeable-views";

import IconPDF from "@/images/file-pdf.svg";
import IconWord from "@/images/file-word.svg";
import { ReactSVG } from "react-svg";

import ResumeEntry from "@/components/resumeEntry";
import SlideControls from "@/components/slideControls";
import { Link } from "react-router-dom";

interface IResumeState {
	entryCount: number;
	entryIndex: number;
}

export default class ResumePage<Props> extends React.Component<Props, IResumeState> {

	state: IResumeState = {
		entryCount: 9,
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

				<div className="corner">

					<a title="Download resume in PDF format" href="/resumeFiles/Kevin%20Joseph%20-%20resume.pdf">
						<ReactSVG
							src={IconPDF}
						/>
					</a>
					<a title="Download resume in Microsoft Word (.docx) format" href="/resumeFiles/Kevin%20Joseph%20-%20resume.docx">
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
						company="Self-Employed"
						start="December 2022"
						current={true}
					>

						<p>
							I was laid off from Ezoic in December 2022. After a small break in order to travel, I&apos;ve been looking for an opportunity to get back into a development role while working as a rideshare driver. I&apos;ve also spent part of this time working on personal development projects.
						</p>

						<p><strong>Project examples:</strong></p>
						<ul>
							<li>Esports broadcast overlay, developed in React. (More details available in <Link to="/web">Examples</Link>.)</li>
							<li>System for tracking item progression during charity gaming fundraiser.This is a work in progress utilizing a MySQL database, an API written in Go, and a React front end.</li>
						</ul>

					</ResumeEntry>


					<ResumeEntry
						company="Ezoic"
						start="May 2021"
						end="December 2022"
						location="Carlsbad, CA"
						title="Software Engineer"
					>

						<p>
                        	Worked on a wide variety of front- and back-end systems/tools, for both internal and external customer use.
						</p>

						<p><strong>Project examples:</strong></p>
						<ul>
							<li>Created monthly performance dashboard allowing clients to view their monthly ad revenue, engagement, and other metrics at a glance.</li>
							<li>Made updates to client-facing dashboards, allowing users to manage their sites more quickly.</li>
							<li>Created/maintained dashboard for external contractors to update site status.</li>
						</ul>

						<p><strong>Main technologies used:</strong></p>
						<ul className="columnList">
							<li>Go</li>
							<li>Vue</li>
							<li>JavaScript</li>
							<li>TypeScript</li>
							<li>PHP</li>
							<li>MySQL</li>
							<li>HTML</li>
							<li>CSS</li>
							<li>Git</li>
						</ul>

					</ResumeEntry>

					<ResumeEntry
						company="Study.com"
						start="November 2019"
						end="February 2021"
						location="Mountain View, CA"
						title="Front End Software Engineer"
					>

						<p>
							Responsible for creating and updating external site pages as well as internal tools. Worked extensively on the front-end customer view, and also created tests with Selenium to ensure the MySQL backend was performant with the Java frontend.
						</p>

						<p><strong>Project examples:</strong></p>
						<ul>
							<li>Collaborated on layout components for long-form hub landing pages, enabling quicker builds for future pages while allowing for customizations.</li>
							<li>Built dashboards for internal management of the external website, allowing non-technical users to update content on demand.</li>
						</ul>

						<p><strong>Main technologies used:</strong></p>
						<ul className="columnList">
							<li>AngularJS</li>
							<li>JavaScript</li>
							<li>TypeScript</li>
							<li>CSS</li>
							<li>Less</li>
							<li>Bootstrap</li>
							<li>Gulp</li>
							<li>HTML</li>
							<li>JSP</li>
							<li>JSTL</li>
							<li>Java</li>
							<li>MySQL</li>
							<li>Selenium</li>
							<li>Git</li>
						</ul>

					</ResumeEntry>

					<ResumeEntry
						company="Rain Bird"
						start="August 2018"
						end="February 2019"
						location="San Diego, CA"
						title="Software Test Engineer"
						contract="Black Diamond Networks"
					>

						<p>
							Build QA testing for iQ4, a web-based customer interface based in Angular. Besides task-by-task integration testing, I worked to implement an end-to-end testing suite using Protractor and Selenium. creating unit tests for various front end components.
						</p>

						<p><strong>Main technologies used:</strong></p>
						<ul className="columnList">
							<li>JavaScript</li>
							<li>TypeScript</li>
							<li>Protractor</li>
							<li>Selenium</li>
							<li>Yarn</li>
							<li>npm</li>
							<li>Node.js</li>
							<li>Git</li>
						</ul>

					</ResumeEntry>

					<ResumeEntry
						company="Renovate America"
						start="May 2015"
						end="April 2017"
						location="San Diego, CA"
						title="Senior Web Developer"
					>

						<p>
							At RA I was primarily focused with two separate teams: one focusing on the internally-facing toolkit used in call center operations, and the other maintaining the externally-facing website.
						</p>

						<p><strong>Project examples:</strong></p>
						<ul>
							<li>Created an interface for adding products to a customer's project, moving it from a jQuery-heavy independent page to an integrated part of the larger toolkit within AngularJS.</li>
							<li>Built landing pages for the customer-facing website incorporating a SiteCore CMS using AngularJS and Razor.</li>
						</ul>

						<p><strong>Main technologies used:</strong></p>
						<ul className="columnList">
							<li>AngularJS</li>
							<li>JavaScript</li>
							<li>Gulp</li>
							<li>HTML</li>
							<li>CSS</li>
							<li>Sass</li>
							<li>Bootstrap</li>
							<li>Kendo UI</li>
							<li>Microsoft .NET Razor</li>
							<li>Microsoft C#</li>
							<li>Git</li>
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
							I was part of a small development group working on the analytics for the main BestBuy.com website. Working with the UI/UX developers, I would take in telemetry from the site and use Adobe Analytics for tracking the metrics required by the business.
						</p>

						<p><strong>Project examples:</strong></p>
						<ul>
							<li>Led the effort to do a full rewrite of the website front end code base, moving from jQuery-based files to a module-based framework using RequireJS, integrated with Signal Tag Manager.</li>
							<li>Added new tracking metrics as requested by the business.</li>
						</ul>

						<p><strong>Main technologies used:</strong></p>
						<ul className="columnList">
							<li>JavaScript</li>
							<li>RequireJS</li>
							<li>Lodash</li>
							<li>jQuery</li>
							<li>Jenkins</li>
							<li>Adobe Analytics</li>
							<li>Signal Tag Manager</li>
							<li>Git</li>
						</ul>

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

						<p><strong>Main technologies used:</strong></p>
						<ul className="columnList">
							<li>JavaScript</li>
							<li>HTML</li>
							<li>CSS</li>
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

						<p><strong>Main technologies used:</strong></p>
						<ul className="columnList">
							<li>JavaScript</li>
							<li>jQuery</li>
							<li>JSP</li>
							<li>HTML</li>
							<li>CSS</li>
							<li>Dojo</li>
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
						</p>

						<p><strong>Project examples:</strong></p>
						<ul>
							<li>Complete design of THQ's store, including integrated single sign on</li>
							<li>Visual overhaul of Dungeons &amp; Dragons online store</li>
						</ul>

						<p><strong>Main technologies used:</strong></p>
						<ul className="columnList">
							<li>JavaScript</li>
							<li>jQuery</li>
							<li>HTML</li>
							<li>CSS</li>
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
							Internet Broadcasting (now known as Lakana) is an online publisher for media companies, specializing in television station websites. I worked on front-end enhancements for various properties, developing within an in-house content management framework.  For part of my time, I was the lead developer for the Cox Media websites.
						</p>

						<p><strong>Project examples:</strong></p>
						<ul>
							<li>Implemented Adobe Analytics tracking code across Cox Media websites</li>
							<li>Added numerous landing pages across various client sites</li>
						</ul>

						<p><strong>Main technologies used:</strong></p>
						<ul className="columnList">
							<li>JavaScript</li>
							<li>XML</li>
							<li>XSLT</li>
							<li>HTML</li>
							<li>CSS</li>
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
