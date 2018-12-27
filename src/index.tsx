import { createBrowserHistory } from "history";
import React from "react";
import { render } from "react-dom";
import { Route, Router, Switch } from "react-router-dom";

const history = createBrowserHistory();

// load site css
import "styles/main.scss";

// load static files
import "static/.htaccess";
require.context("static/resume", false);

// require.context("images/favicon", true);
import "static/robots.txt";

// import page classes
import ContactPage from "pages/contact";
import DesignPage from "pages/design";
import HomePage from "pages/homepage";
import ResumePage from "pages/resume";
import WebPage from "pages/web";

import NotFoundPage from "status/404";

// import compoments
import Header from "components/header";

class AppRouter<Props> extends React.Component<any> {

	constructor(props: Props) {
		super(props);
	}

	render() {

		return (

			<Router history={history}>

				<>

					<Header />

					<div id="content">
						<Switch>
							<Route path="/" component={HomePage} exact={true} />

							<Route path="/contact" component={ContactPage} />
							<Route path="/design" component={DesignPage} />
							<Route path="/resume" component={ResumePage} />
							<Route path="/web" component={WebPage} />

							<Route component={NotFoundPage} />
						</Switch>
					</div>

				</>

			 </Router>

		);
	}

}


render(
	<AppRouter />,
	document.getElementById("root"));
