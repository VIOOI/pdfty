import { render } from "solid-js/web";
import { createRoutesView, RouterProvider } from "atomic-router-solid";

import { appRoute } from "@pages/app";


import { MainLayout } from "@templates/Layouts/main";

import { convertToRoute } from "@pages/convert_to";

import { convertFromRoute } from "@pages/convert_from";

import { lazy } from "solid-js";

import { createI18nContext, I18nContext } from "@solid-primitives/i18n";

import { router } from "./routing";
import { globalStyle } from "./globalStyle";
import { dist } from "./locale";

const App = lazy(() => import("../components/pages/app")); 
const ConvertTo = lazy(() => import("../components/pages/convert_to")); 
const ConvertFrom = lazy(() => import("../components/pages/convert_from")); 

const RouterView = createRoutesView({
	routes: [
		{ route: appRoute, view: App, layout: MainLayout },
		{ route: convertToRoute, view: ConvertTo, layout: MainLayout },
		{ route: convertFromRoute, view: ConvertFrom, layout: MainLayout },
	],
	otherwise: lazy(() => import("../components/pages/notFound")),
});


const value = createI18nContext(dist, "ru");

render(() => {
	globalStyle();
	return (
		<I18nContext.Provider value={value}>
			<RouterProvider router={router} >
				<RouterView />
			</RouterProvider>
		</I18nContext.Provider>
	);
}, document.getElementById("root") as HTMLElement);

