import { render } from "solid-js/web";
import { createRoutesView, RouterProvider } from "atomic-router-solid";

import { App, appRoute } from "@pages/app";

import { NotFound } from "@pages/notFound";

import { MainLayout } from "@templates/Layouts/main";

import { router } from "./routing";
import { globalStyle } from "./globalStyle";

const RouterView = createRoutesView({
	routes: [
		{ route: appRoute, view: App, layout: MainLayout },
	],
	otherwise: NotFound,
});


render(() => {
	globalStyle();
	return (
		<RouterProvider router={router} >
			<RouterView />
		</RouterProvider>
	);
}, document.getElementById("root") as HTMLElement);

