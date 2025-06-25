import { ReactNode, useState } from "react";

interface ILink {
	text: string,
	url: string,
};

const ProjectItem = ({
	children,
	launched,
	links,
	logo,
	name,
	updated,
	version,
}: {
	children: ReactNode,
	launched?: string,
	links?: ILink[],
	logo?: string,
	name: string,
	updated?: string,
	version?: string,
}) => {

	const [itemOpen, setItemOpen] = useState(false);

	const toggleOpen = () => {
		setItemOpen(!itemOpen);
	}

	return (

		<div className={`projectItem ${itemOpen ? "open" : ""}`}>
			<div className="control" onClick={toggleOpen} title={itemOpen ? "click to expand" : "click to collapse"}>
				<span className="line"></span>
				<span className="line"></span>
			</div>
			<div className="head" onClick={toggleOpen} title={itemOpen ? "click to expand" : "click to collapse"}>
				{logo ?
					<div className="logo">
						<img src={logo} alt="" />
					</div>
				: null}
				<h2>{name}</h2>
				{ launched ?
					<p className="launch">Initial release: {launched}</p>
				: null}
				{ updated ?
					<p className="updated">Updated: {updated}{version ? ` (version ${version})` : ""}</p>
				: null}
			</div>
			<div className="details">
				<div className="inner">

					{links ?
						<ul className="links">
							{links.map((link, index) =>
								<li key={index}>
									<a href={link.url} target="_blank">{link.text}</a>
								</li>
							)}
						</ul>
					: null}

					{children}
				</div>
			</div>

		</div>

	)


}

export default ProjectItem;
