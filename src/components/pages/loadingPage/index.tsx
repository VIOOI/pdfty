import { Button } from "@atoms/botton/button";
import { Component, ParentComponent } from "solid-js";

import { sLoadingPage } from "./loadingPage.css";

type Props = {
	name: string,
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	handleClick: (...any: any[]) => any,
}

export const LoadingPage: ParentComponent = ({ children }) => {
	return (
		<div class={sLoadingPage()}>
			{ children }
		</div>
	);
};
