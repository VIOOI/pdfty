import { Component, createContext, createMemo, createSignal, onCleanup, ParentComponent } from "solid-js";
import { For } from "solid-js/web";

import { createEvent, createStore, sample } from "effector";

import { useUnit } from "effector-solid";


import close from "@media/icons/editor/rightMenu/close.svg?raw";
import setting from "@media/icons/editor/rightMenu/settings.svg?raw";

import { sRightMenu } from "./rightMenu.css";

const $isOpen = createStore(true);
const toggleIsOpen = createEvent(); 

sample({
	clock: toggleIsOpen,
	source: $isOpen,
	fn: source => !source,
	target: $isOpen,
});

const CRightMenu: ParentComponent = ({ children }) => {
	const isOpen = useUnit($isOpen);
	return (
		<div 
			class={sRightMenu()}
			classList={{
				"closed": !isOpen(),
			}}
		> { children } </div>
	);
};

const CButtons: ParentComponent = ({ children }) => {
	const isOpen = useUnit($isOpen);
	const getIcon = createMemo(() => isOpen() ? close : setting);

	return (
		<div class="buttons">
			{ children }
			<div
				class="button close"
				onClick={() => toggleIsOpen()}
				innerHTML={getIcon()}
			/>
		</div>
	);
};

const COptions: ParentComponent = ({ children }) => <>{ children }</>;

export const RightMenu = {
	Menu: CRightMenu,
	Buttons: CButtons,
	Options: COptions,
};
