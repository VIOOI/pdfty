import { render } from "solid-js/web";
import { createRoutesView, RouterProvider } from "atomic-router-solid";

import { App, appRoute } from "@pages/app";

import { NotFound } from "@pages/notFound";

import { MainLayout } from "@templates/Layouts/main";

import { ConvertTo, convertToRoute } from "@pages/convert_to";

import { convertFromRoute, ConvertFrom } from "@pages/convert_from";

import { router } from "./routing";
import { globalStyle } from "./globalStyle";

const RouterView = createRoutesView({
	routes: [
		{ route: appRoute, view: App, layout: MainLayout },
		{ route: convertToRoute, view: ConvertTo, layout: MainLayout },
		{ route: convertFromRoute, view: ConvertFrom, layout: MainLayout },
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

