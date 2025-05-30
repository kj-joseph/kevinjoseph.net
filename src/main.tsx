import { createBrowserHistory } from "history";
import React from "react";
import ReactDOM from "react-dom/client";
import { Route, Router, Switch } from "react-router-dom";
// import fs from "fs";

const history = createBrowserHistory();

// load site css
import "@/styles/main.scss";

// import page classes
import ContactPage from "@/pages/contact";
import HomePage from "@/pages/homepage";
import ResumePage from "@/pages/resume";
import WebPage from "@/pages/web";

import NotFoundPage from "@/status/404";

// import compoments
import Header from "@/components/header";

interface IIndexState {
	navOpen: boolean;
}

class AppRouter<Props> extends React.Component<Props, IIndexState> {

	state: IIndexState = {
		navOpen: false
	}

	constructor(props: Props) {
		super(props);
	}

	componentDidMount(): void {
		this.updateNavState();
	}

	componentDidUpdate() {
		window.onpopstate = () => {
			this.updateNavState();
		};
	}

	render(): JSX.Element {

		return (

			<Router history={history}>

				<>

					<Header
						setNavStateFunction={this.setNavState}
					/>

					<div id="content">
						<Switch>
							<Route path="/" component={HomePage} exact={true} />

							<Route path="/contact" component={ContactPage} />
							<Route path="/resume" component={ResumePage} />
							<Route path="/web" component={WebPage} />

							<Route component={NotFoundPage} />
						</Switch>
					</div>

				</>

			</Router>

		);
	}

	setNavState = (newNavState: boolean): void => {

		if (newNavState) {
			document.documentElement.classList.add("nav-open");
		} else {
			document.documentElement.classList.remove("nav-open");
		}

		this.setState({
			navOpen: newNavState,
		});

	}

	updateNavState = () => {
		this.setNavState(document.location.pathname==="/");
	}

}

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<AppRouter />
);
