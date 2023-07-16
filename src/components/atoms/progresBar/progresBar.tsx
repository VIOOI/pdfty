import { createSignal, createEffect, onCleanup, VoidComponent, Accessor } from "solid-js";
import { For } from "solid-js/web";

import { sProgresBar } from "./progresBar.css";

type ProgresBarProps = {
  value: Accessor<number>;
};

export const ProgresBar: VoidComponent<ProgresBarProps> = ({ value }) => {
	const [ width, setWidth ] = createSignal(250);
	const [ stroke, setStroke ] = createSignal(12);

	const cx = () => width() / 2;
	const radius = () => (width() / 2) - (stroke() * 2);
	const circumference = () => 2 * Math.PI * radius();
	const offset = () => circumference() - value() == 200 ? 100 : value() / 100 * circumference();

	return (
		<svg 
			class={sProgresBar({ css: {
				$$offset: offset(),
				$$dasharray: `${circumference()} ${circumference()}`,
			} })}
			width={width()}
			height={width()}
		>
			<circle 
				stroke={value() == 200 ? "#F8F8F8" : "#ff5f38"} 
				stroke-width={stroke()}
				cx={cx()}
				cy={cx()}
				r={radius()}
				fill="transparent"
			/>
		</svg>
	);
};
