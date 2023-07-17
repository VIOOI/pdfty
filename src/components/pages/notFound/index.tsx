import { createRoute, redirect } from "atomic-router";
import { createEvent } from "effector";
import { onCleanup } from "solid-js";

import { appRoute } from "../app";

import { sNotFound } from "./notFound.css";

export const notFoundRoute = createRoute();

const goHomeRedirect = createEvent();
redirect({
	clock: goHomeRedirect,
	route: appRoute,
});


export const NotFound = () => {
	const timeRedirect = setTimeout(() => { goHomeRedirect(); }, 2000);

	onCleanup(() => clearTimeout(timeRedirect));

	return (
		<div class={sNotFound()} >
			<h1>NotFound</h1>
		</div>
	);
};
