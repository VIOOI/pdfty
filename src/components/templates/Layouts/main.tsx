
// import { Header } from "@organisms/header/header";

import { Header } from "@organisms/header/header";
import { Component, JSX } from "solid-js";

type Props = {
	children: JSX.Element
}

export const MainLayout: Component<Props> = ({ children }) => {
	return () => {
		return (
			<>
				<Header />
				{ children }
			</>
		);
	};
};
