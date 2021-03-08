import React from "react";

interface IWebExampleProps {
	github?: string;
	inactive: boolean;
	launched?: string;
	title: string;
	url: string;
	version?: string;
	versionLaunched?: string;
}

export default class WebExample extends React.Component<IWebExampleProps> {

	static defaultProps = {
		inactive: false,
	};

	constructor(props: IWebExampleProps) {
		super(props);
	}

	render(): JSX.Element {

		return (

			<div className="slide">

				<div className="head">
					<h2>
						{this.props.title}
					</h2>
					{this.props.launched ?
						<h4>
							Launched {this.props.launched}
						</h4>
						: null
					}
					{this.props.version ?
						<p className="parenthetical">
							Version {this.props.version}
							{this.props.versionLaunched ?
								` launched ${this.props.versionLaunched}`
								: null
							}
						</p>
						: null
					}

					{this.props.inactive ?
						<p className="parenthetical">
							(no longer active)
						</p>
						: null
					}

					<p>
						{this.props.url ?
							<a href={this.props.url} target="_blank" rel="noopener noreferrer">
								Visit Site
							</a>
							: null
						}
						{this.props.github ?
							<>
								{this.props.url ? " | " : null}
								<a href={`https://github.com/kj-joseph/${this.props.github}`} target="_blank" rel="noopener noreferrer">
									GitHub repository
								</a>
							</>
							: null
						}
					</p>

				</div>

				{this.props.children}

			</div>

		);

	}

}
