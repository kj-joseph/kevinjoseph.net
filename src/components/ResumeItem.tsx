import { ReactNode, useState } from "react";

const ResumeItem = ({
	children,
	company,
	current = false,
	end,
	location,
	logo,
	start,
	title,
}: {
	children: ReactNode,
	company: string,
	current?: boolean,
	end?: string,
	location?: string,
	logo?: string,
	start: string,
	title?: string,
}) => {

	const [itemOpen, setItemOpen] = useState(false);

	const toggleOpen = () => {
		setItemOpen(!itemOpen);
	}

	return (

		<div className={`resumeItem ${itemOpen ? "open" : ""}`}>
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
				<h2>{company}</h2>
				{ location ?
					<p className="location">{location}</p>
				: null}
				<p className="dates">{start}{current ? "\u2013 current" : end ? ` \u2013 ${end}` : ""}</p>
				{ title ?
					<p className="title">{title}</p>
				: null}
			</div>
			<div className="details">
				<div className="inner">
					{children}
				</div>
			</div>

		</div>

	)


}

export default ResumeItem;
