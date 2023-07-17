
import { appRoute } from "@pages/app";
import { convertFromRoute } from "@pages/convert_from";
import { convertToRoute } from "@pages/convert_to";
import { notFoundRoute } from "@pages/notFound";
import { createHistoryRouter, RouteInstance } from "atomic-router";
import { createBrowserHistory, createHashHistory } from "history";

type RouteType = Array<{
	path: string,
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	route: RouteInstance<any>,
}>

export const routes: RouteType = [
	{ path: "/", route: appRoute },
	{ path: "/convert_to/:tool", route: convertToRoute },
	{ path: "/convert_from/:tool", route: convertFromRoute },
];


export const history = createHashHistory();

export const router = createHistoryRouter({
	routes,
	notFoundRoute: notFoundRoute,
});

router.setHistory(history);
