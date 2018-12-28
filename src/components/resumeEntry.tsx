import React from "react";

interface IResumeEntryProps {
	company: string;
	contract?: string;
	current: boolean;
	end?: string;
	location?: string;
	start: string;
	title?: string;
}

export default class ResumeEntry extends React.Component<IResumeEntryProps> {

	static defaultProps = {
		current: false,
	};

	constructor(props: IResumeEntryProps) {
		super(props);
	}

	render() {

		return (

			<div className="slide">

				<div className="head">
					<h2>
						{this.props.company}
					</h2>
					{this.props.title ?
						<h3>
							{this.props.title}
						</h3>
					: null}
					{this.props.contract ?
						<p className="parenthetical">
							(contract via {this.props.contract})
						</p>
					: null}
					<h4>
						{this.props.start} &mdash; {this.props.end}{this.props.current ? " (current)" : null}
						{this.props.location ?
							<>
								<br />
								{this.props.location}
							</>
						: null}
					</h4>
				</div>

				{this.props.children}

			</div>

		);

	}

}
