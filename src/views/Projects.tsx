import ProjectItem from "@/components/ProjectItem";

import "@/styles/projects.css";

const Projects = () => {

	return (

		<div className="projects">

			<h1>Project Examples</h1>

			<ProjectItem
				name="Esports broadcast overlay"
				logo="/images/rloverlay.png"
				launched="Dec 2024"
				links={[
					{
						text: "Broadcast video",
						url: "https://youtu.be/6-AsQXi23o0?t=274",
					},
					{
						text: "RSC repository",
						url: "https://github.com/RSC-NA/stream-overlay-v2",
					},
					{
						text: "SGL repository",
						url: "https://github.com/kj-joseph/sgl-overlay",
					},
				]}
			>

				<p>This overlay for Rocket League brodcasts receives raw data from the game via a WebSocket connection, then sits on top of the game screen during live broadcasts to display the data in a graphical format, showing information like the score, time remaining, and player stats. The overlay system also includes pre-game matchup and statistics as well as post-game stats for all players.</p>

				<p>I&apos;ve launched a version of my overlay for two leagues, customizing the visual style for each as well as bringing in season-to-date stats for use during the pregame; one does this via an API, while the other gets data from Google Sheets.</p>

				<h3>Main technologies:</h3>
				<p>CSS, Google Sheets, HTML, JavaScript, Node.js, npm, React, Sass, Vite, Webpack, WebSockets</p>

			</ProjectItem>

			<ProjectItem
				name="Roll-Cal"
				logo="images/roll-cal.png"
				launched="Nov 2018"
				links={[
					{
						text: "Roll-Cal website",
						url: "https://roll-cal.com/",
					},
				]}
			>
				<p>Searchable calendar for roller derby events. Allows users to create accounts to add their own events. I created everything for the site, including graphics, a front-end React app, a back-end API using Express and Node.js, and automated deployment using Travis CI.</p>
				<h3>Main technologies:</h3>
				<p>CSS, Google Sheets, HTML, JavaScript, Node.js, npm, React, Sass, Vite, Webpack, WebSockets</p>

			</ProjectItem>

			<ProjectItem
				name="KevinJoseph.net"
				logo="images/kj.png"
				launched="2004"
				updated="Jun 2025"
				version="7"
			>
				<p>This site.</p>

				<h3>Main technologies:</h3>
				<p>React, JavaScript, TypeScript, HTML, CSS, Styled Components, Vite, npm</p>

			</ProjectItem>

			<ProjectItem
				name="KJ Branded"
				logo="images/kj-branded.png"
				launched="Mar 2018"
				links={[
					{
						text: "KJ Branded website",
						url: "https://kjbranded.com/",
					},
				]}
			>

				<p>Marketing website for my (dormant) freelance graphic design company.</p>

				<h3>Main technologies:</h3>
				<p>React, JavaScript, TypeScript, HTML, CSS, Sass, Webpack, Babel, npm</p>


			</ProjectItem>

		</div>

	)


}

export default Projects;
