import { render } from "solid-js/web";
import { createRoutesView, RouterProvider } from "atomic-router-solid";

import { App, appRoute } from "@pages/app";

import { NotFound } from "@pages/notFound";

import { MainLayout } from "@templates/Layouts/main";

import { ConvertTo, convertToRoute } from "@pages/convert_to";

import { convertFromRoute, ConvertFrom } from "@pages/convert_from";

import { createSignal } from "solid-js";

import { createI18nContext, I18nContext } from "@solid-primitives/i18n";

import { router } from "./routing";
import { globalStyle } from "./globalStyle";
import { dist } from "./locale";

const RouterView = createRoutesView({
	routes: [
		{ route: appRoute, view: App, layout: MainLayout },
		{ route: convertToRoute, view: ConvertTo, layout: MainLayout },
		{ route: convertFromRoute, view: ConvertFrom, layout: MainLayout },
	],
	otherwise: NotFound,
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

