import "@/styles/header.css";

import NavItem from "@/components/NavItem";

const Header = ({ menuOpen, setMenuOpen }: { menuOpen: boolean, setMenuOpen: (state: boolean) => void}) => {

	// const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	}

	const closeNavOnClick = () => {
		setMenuOpen(false);
	}

	return (
		<>
			<div className="header">

				<header>
					<div className="headerContent">
						<div className="logo">
							<img src="/images/kj-2025-full.svg" alt="" />
						</div>
						<div className="text">
							<div className="name">Kevin Joseph</div>
							<div className="description"><span>Software Engineer</span><span>San Diego, CA, USA</span></div>
						</div>
						<div
							className={`menuIcon ${menuOpen? "open" : ""}`}
							onClick={toggleMenu}
						>
							<span className="stripe"></span>
							<span className="stripe"></span>
							<span className="stripe"></span>
						</div>
					</div>

					<div className={`menu ${menuOpen? "open" : ""}`}>
						<nav className="menuContents" aria-labelledby="primary-navigation">
							<NavItem
								closeNavOnClick={closeNavOnClick}
								image="/images/home.jpg"
								link="/"
								title="Home"
							/>
							<NavItem
								closeNavOnClick={closeNavOnClick}
								image="/images/team.jpg"
								link="/resume"
								title="Resume"
							/>
							<NavItem
								closeNavOnClick={closeNavOnClick}
								image="/images/code.jpg"
								link="/projects"
								title="Projects"
							/>
							<NavItem
								closeNavOnClick={closeNavOnClick}
								image="/images/contact.jpg"
								link="/contact"
								title="Contact"
							/>
						</nav>
					</div>

				</header>

			</div>

		</>

	)


}

export default Header;
