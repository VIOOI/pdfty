import { useI18n } from "@solid-primitives/i18n";
import { Component } from "solid-js";

import { cardStyle } from "./homeCard.css";

type Props = {
  icon: string;
  name: string;
};

export const HomeCard: Component<Props> = ({ icon, name }) => {
	const [ t ] = useI18n();
	return (
		<div class={cardStyle()}>
			<a href={name}>
				<div innerHTML={icon}></div>
				<h2>{ t(`tools.${name}.title`) }</h2>
				<p>{ t(`tools.${name}.description`) }</p>
			</a>
		</div>
	);
};

