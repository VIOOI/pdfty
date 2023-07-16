import { Component } from "solid-js";

import { cardStyle } from "./homeCard.css";

type Props = {
  icon: string;
  name: string;
};

export const HomeCard: Component<Props> = ({ icon, name }) => {
  
	return (
		<div class={cardStyle()}>
			<a href={name}>
				<div innerHTML={icon}></div>
				<h2>{ name }</h2>
				<p>Description</p>
			</a>
		</div>
	);
};

