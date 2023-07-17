import { createSignal, onCleanup, Show, For, ParentComponent, createEffect } from "solid-js";
import { Component, JSX } from "solid-js";
import { useI18n } from "@solid-primitives/i18n";

import { Categorie } from "../../../stores/categories";

import poligonIcon from "../../../media/icons/main/polygonMenu.svg?raw";

import { CategoryMenu } from "../categories/categorys";

import { sMenuItem } from "./manuItem.css";

type Props = {
  categories: Array<Categorie>
};

export const Item: ParentComponent<Props> = ({ categories, children }) => {
	const [ t ] = useI18n();

	const [ isOpen, setIsOpen ] = createSignal(false);

	const handleMouseOver = () => { setIsOpen(true); };
	const handleMouseLeave = () => { setIsOpen(false); };

	return (
		<>
			<div
				onMouseOver={handleMouseOver}
				onMouseLeave={handleMouseLeave}
				class={sMenuItem()}
				classList={{
					pointer: categories.length > 0,
				}}
			>
				{ t(`menu.${children}`) }
				<Show when={categories.length > 0}>
					<div innerHTML={poligonIcon} class="poligon" />
				</Show>

				<Show when={isOpen() && categories.length > 0}>
					<div
						class="submenu"
						classList={{
							full: categories.length >= 6,
						}}
					>
						<For each={categories}>{ cat => 
							<CategoryMenu isOpen={isOpen} categoryName={cat.categoryName} items={cat.items} />
						}</For>
					</div>
				</Show>
			</div>
		</>
	);
};

export default Item;
