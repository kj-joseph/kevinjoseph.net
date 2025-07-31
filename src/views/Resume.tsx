import ResumeItem from "@/components/ResumeItem";

import "@/styles/resume.css";

const Resume = () => {

	return (

		<div className="resume">
			<h1>Resume</h1>

			<div className="download">
				<p>Download resume:
					<a href="/resumeFiles/Kevin Joseph - resume.pdf" download>
						<span className="icon"><img src="/images/pdf.svg" alt=""/></span> PDF
					</a>
					<a href="/resumeFiles/Kevin Joseph - resume.docx" download>
						<span className="icon"><img src="/images/word.svg" alt=""/></span> Word
					</a>
				</p>
			</div>

			<ResumeItem
				company="Self-Employed"
				start="Dec 2022"
				logo="images/kj.png"
				current={true}
			>
				<p>I was laid off from Ezoic in December 2022. After a small break in order to travel, I&apos;ve been looking for an opportunity to get back into a development role while working as a rideshare driver. I&apos;ve also spent part of this time working on personal development projects:</p>
				<ul>
					<li>Esports broadcast overlay, developed in React.</li>
					<li>System for tracking item progression during charity gaming fundraiser.This is a work in progress utilizing a MySQL database, an API written in Go, and a React front end.</li>
				</ul>
			</ResumeItem>

			<ResumeItem
				company="Ezoic"
				location="Carlsbad CA"
				start="May 2021"
				end="Dec 2022"
				logo="images/ezoic.png"
				title="Software Engineer"
			>
				<p>Worked on a wide variety of front- and back-end systems/tools, for both internal and external customer use.</p>
				<h3>Project examples</h3>
					<ul>
						<li>Created monthly performance dashboard allowing clients to view their monthly ad revenue, engagement, and other metrics at a glance.</li>
						<li>Made updates to client-facing dashboards, allowing users to manage their sites more quickly.</li>
						<li>Created/maintained dashboard for external contractors to update site status.</li>
					</ul>
				<h3>Main technologies:</h3>
				<p>Go, Vue, JavaScript, TypeScript, PHP, MySQL, HTML, CSS, Git</p>
			</ResumeItem>

			<ResumeItem
				company="Study.com"
				location="Mountain View CA"
				start="Nov 2019"
				end="Feb 2021"
				logo="images/study.png"
				title="Front-End Software Engineer"
			>
				<p>Responsible for creating and updating external site pages as well as internal tools. Worked extensively on the front-end customer view, and also created tests with Selenium to ensure the MySQL backend was performant with the Java frontend.</p>
				<h3>Project examples</h3>
					<ul>
						<li>Collaborated on layout components for long-form hub landing pages, enabling quicker builds for future pages while allowing for customizations.</li>
						<li>Built dashboards for internal management of the external website, allowing non-technical users to update content on demand.</li>
					</ul>
				<h3>Main technologies:</h3>
				<p>AngularJS, JavaScript, TypeScript, CSS, Less, Bootstrap, Gulp, HTML, JSP, JSTL, Java, MySQL, Selenium, Git</p>
			</ResumeItem>

			<ResumeItem
				company="Rain Bird"
				location="San Diego CA"
				start="Aug 2018"
				end="Feb 2019"
				logo="images/rain-bird.png"
				title="Software Testing Engineer"
			>
				<p>Build QA testing for iQ4, a web-based customer interface based in Angular. Besides task-by-task integration testing, I worked to implement an end-to-end testing suite using Protractor and Selenium. creating unit tests for various front end components.</p>
				<h3>Main technologies:</h3>
				<p>JavaScript, TypeScript, Protractor, Selenium, Yarn, npm, Node.js, Git</p>
			</ResumeItem>

			<ResumeItem
				company="Renovate America"
				location="San Diego CA"
				start="May 2015"
				end="Apr 2017"
				logo="images/renovate-america.png"
				title="Web Developoer"
			>
				<p>At RA I was primarily focused with two separate teams: one focusing on the internally-facing toolkit used in call center operations, and the other maintaining the externally-facing website.</p>
				<h3>Project examples</h3>
					<ul>
						<li>Created an interface for adding products to a customer's project, moving it from a jQuery-heavy independent page to an integrated part of the larger toolkit within AngularJS.</li>
						<li>Built landing pages for the customer-facing website incorporating a SiteCore CMS using AngularJS and Razor.</li>
					</ul>
				<h3>Main technologies:</h3>
				<p>AngularJS, JavaScript, Gulp, HTML, CSS, Sass, Bootstrap, Kendo UI, Microsoft .NET Razor, Microsoft C#, Git, Microsoft TFS</p>
			</ResumeItem>

			<ResumeItem
				company="Best Buy"
				location="Richfield MN"
				start="Sep 2013"
				end="Mar 2015"
				logo="images/best-buy.png"
				title="Web Developer"
			>
				<p>I was part of a small development group working on the analytics for the main BestBuy.com website. Working with the UI/UX developers, I would take in telemetry from the site and use Adobe Analytics for tracking the metrics required by the business.</p>
				<h3>Project examples</h3>
					<ul>
						<li>Led the effort to do a full rewrite of the website front end code base, moving from jQuery-based files to a module-based framework using RequireJS, integrated with Signal Tag Manager.</li>
						<li>Added new tracking metrics as requested by the business.</li>
					</ul>
				<h3>Main technologies:</h3>
				<p>JavaScript, RequireJS, Lodash, jQuery, Jenkins, Adobe Analytics, Signal Tag Manager, Git</p>
			</ResumeItem>

		</div>

	)


}

export default Resume;
