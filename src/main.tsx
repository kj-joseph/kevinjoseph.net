// import { createBrowserHistory } from "history";
import { lazy, StrictMode, Suspense, useState } from "react";
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import "@/styles/main.css";

import Header from "@/views/Header";
import Page from "@/components/Page";

const Contact = lazy(() => import("@/views/Contact") )
const Home = lazy(() => import("@/views/Home") )
const Projects = lazy(() => import("@/views/Projects") )
const Resume = lazy(() => import("@/views/Resume") )

const App = () => {

	const [menuOpen, setMenuOpen] = useState(false);

	const closeNavOnClick = () => {
		setMenuOpen(false);
	}

	const AppRouter = createBrowserRouter([{
		element: (
			<>
				<Header
					menuOpen={menuOpen}
					setMenuOpen={setMenuOpen}
				/>
				<div className="content">
					<Outlet />
				</div>
			</>
		),
		children: [
			{
				path: "/",
				element:
					<Suspense fallback={<>Loading...</>}>
						<Page pageBackground="/images/home.jpg">
							<Home closeNavOnClick={closeNavOnClick} />
						</Page>
					</Suspense>,
			},
			{
				path: "/contact",
				element:
					<Suspense fallback={<>Loading...</>}>
						<Page pageBackground="/images/contact.jpg">
							<Contact />
						</Page>
					</Suspense>,
			},
			{
				path: "/projects",
				element:
					<Suspense fallback={<>Loading...</>}>
						<Page pageBackground="/images/code.jpg">
							<Projects />
						</Page>
					</Suspense>,
			},
			{
				path: "/resume",
				element:
					<Suspense fallback={<>Loading...</>}>
						<Page pageBackground="/images/team.jpg">
							<Resume />
						</Page>
					</Suspense>,
			},
		],
	}]);


	return (
		<RouterProvider router={AppRouter} />
	)

}

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<App />
	</StrictMode>,
)
