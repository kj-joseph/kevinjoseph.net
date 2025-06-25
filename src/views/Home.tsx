import { NavLink } from "react-router";

const Home = ({ closeNavOnClick }:{ closeNavOnClick: () => void}) => {

	return (

		<div className="home">
			<h1>Welcome!</h1>
			<p>I&apos;m Kevin.  I&apos;m a software engineer with 15 years of demonstrated experience specializing in front-end development and interfaces to back-end systems. Currently seeking an opportunity to utilize my well-developed skills for a team where I can continue to learn and grow.</p>
			<p>This site contains <NavLink onClick={closeNavOnClick} to="/resume">a rundown of my employment history</NavLink> as well as <NavLink onClick={closeNavOnClick} to="/projects">examples of projects</NavLink> I&apos;ve worked on, both professional and personal.  If you&apos;re interested in connecting with me directly, you can <NavLink onClick={closeNavOnClick} to="/contact">contact me</NavLink>.</p>
		</div>

	)


}

export default Home;
