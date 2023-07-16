import { createSignal, onCleanup, onMount, ParentComponent, Show } from "solid-js";
import { For } from "solid-js/web";


import rotate from "@media/icons/editor/cards/rotate.svg?raw";
import trash from "@media/icons/editor/cards/trash.svg?raw";

import { formatBytes } from "./formatBytes";
import { sCard } from "./card.css";

type CardProps = {
  type: "info" | "number";
  title?: string;
  size?: number;
  pages?: number;
  trashFn?: () => void;
};

export const Card: ParentComponent<CardProps> = ({ type, title, size, pages, trashFn, children }) => {
	const [ sizeUnit, setSizeUnit ] = createSignal(formatBytes(size));


	return (
		<div class={sCard()}>
			<div class="image">
				{ children }
			</div>

			<Show when={type === "info"}>
				<header class="header">
					<h3>{title}</h3>
					<div class="headerDiv">
						<div innerHTML={rotate}></div>
						<div innerHTML={trash} onClick={trashFn}></div>
					</div>
				</header>
				<div class="options">
					{sizeUnit().size} {sizeUnit().unit} {pages && `${pages} pages`}
				</div>
			</Show>
			<Show when={type === "number"}>
				<div>{pages || 0}</div>
			</Show>
		</div>
	);
};
