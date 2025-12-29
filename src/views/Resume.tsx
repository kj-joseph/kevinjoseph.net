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
				company="United States Postal Service"
				start="Jul 2025"
				logo="images/usps.png"
				title="Rural Carrier Associate"
				current={true}
			>
				<p>Worked independently in high-accountability service roles requiring accuracy, time management, and consistent execution under daily operational constraints. Demonstrated reliability, adaptability, and strong self-direction while managing dynamic schedules and customer-facing responsibilities.</p>
				<ul>
					<li>Dependable in executing daily mail delivery routes with consistent accuracy, meeting strict schedules and service-level expectations in a high-volume environment.</li>
					<li>Detail-oriented in sorting, organizing, and delivering mail to ensure correct handling, regulatory compliance, and customer satisfaction.</li>
					<li>Self-directed while working independently in a fast-paced setting, managing time effectively and adapting to changing routes, weather, and operational demands.</li>
				</ul>
			</ResumeItem>

			<ResumeItem
				company="Rocket Soccar Confederation"
				start="Jun 2022"
				logo="images/rsc.png"
				title="Media Committee Head / Overlay Developer / Stream Producer"
				current={true}
			>
				<p>Led media production and live broadcast initiatives for a competitive online esports league, developing real-time overlays and producing reliable live streams under production pressure. Combined front-end engineering, collaboration, and live troubleshooting to deliver consistent, high-quality viewer experiences.</p>
				<ul>
					<li>Technical lead responsible for designing and developing live esports broadcast overlays using React, HTML, CSS, Sass, and WebSockets to support real-time match data and viewer engagement.</li>
					<li>Collaborative head of the Media Committee, partnering with league administrators, casters, and production staff to standardize visual assets, improve broadcast quality, and ensure consistent delivery across events.</li>
					<li>Hands-on stream producer overseeing live match broadcasts, troubleshooting technical issues in real time, and ensuring reliable, high-quality streams for competitive online audiences.</li>
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
				<p>Developed and enhanced client-facing dashboards that surfaced performance, revenue, and engagement metrics for web publishers at scale. Partnered across teams to build maintainable, user-focused front-end solutions that improved operational efficiency and data visibility.</p>
				<h3>Project examples</h3>
					<ul>
						<li>Designed and delivered a monthly performance dashboard enabling clients to quickly view ad revenue, engagement, and key site metrics, improving transparency and decision-making.</li>
						<li>Enhanced client-facing dashboards by streamlining workflows and interface interactions, allowing users to manage and update their sites more efficiently.</li>
						<li>Developed and maintained an internal dashboard for external contractors to update site status and operational data, reducing manual coordination and improving data accuracy.</li>
					</ul>
				<h3>Main technologies:</h3>
				<p>Go (GoLang), Vue, JavaScript, TypeScript, PHP, MySQL, HTML, CSS, Git</p>
			</ResumeItem>

			<ResumeItem
				company="Study.com"
				location="Mountain View CA"
				start="Nov 2019"
				end="Feb 2021"
				logo="images/study.png"
				title="Front-End Software Engineer"
			>
				<p>Contributed to reusable front-end components and internal dashboards that accelerated content delivery and reduced engineering dependency for non-technical teams. Delivered scalable Angular-based solutions within an Agile environment, emphasizing maintainability and consistent user experience.</p>
				<h3>Project examples</h3>
					<ul>
						<li>Collaborated on the design and implementation of reusable layout components for long-form hub landing pages, accelerating page creation while preserving flexibility for custom content.</li>
						<li>Built internal management dashboards that enabled non-technical teams to update and manage website content on demand, reducing engineering dependency.</li>
						<li>Implemented scalable front-end solutions within an AngularJS environment, ensuring consistency, maintainability, and alignment with established design patterns.</li>
						<li>Supported Agile development practices by working closely with designers, product managers, and back-end engineers to deliver high-quality features on schedule.</li>
					</ul>
				<h3>Main technologies:</h3>
				<p>AngularJS, JavaScript, TypeScript, CSS, Less, Bootstrap, Gulp, HTML, JSP, Java, MySQL, Selenium, Git</p>
			</ResumeItem>

			<ResumeItem
				company="Rain Bird"
				location="San Diego CA"
				start="Aug 2018"
				end="Feb 2019"
				logo="images/rain-bird.png"
				title="Software Testing Engineer"
			>
				<p>Performed integration and end-to-end testing for a customer-facing web application, ensuring reliability and functional accuracy across releases. Built automated test suites to improve coverage, reduce regression risk, and support consistent delivery quality.</p>
				<h3>Main technologies:</h3>
				<p>JavaScript, TypeScript, Protractor, Selenium, Yarn, npm, Node.js, Git</p>
			</ResumeItem>

		</div>

	)


}

export default Resume;
