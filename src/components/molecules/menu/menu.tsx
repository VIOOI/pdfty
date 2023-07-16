import { Link } from "atomic-router-solid";
import { useUnit } from "effector-solid";
import { Component, For, Show } from "solid-js";

import { $categories } from "../../../stores/categories";

import { Item } from "../menuItem/menuItem";


import { sMenu } from "./manu.css";

export const Menu: Component = () => {
	const categories = useUnit($categories);

	return (
		<div class={sMenu()} >
			<For each={categories()}>{ item => 
				<>
					<Show when={item.link === ""}> 
						<Item categories={item.submenu} >
							{ item.name }
						</Item>
					</Show>
					<Show when={item.link !== ""}> 
						<Link to={item.link}>
							<Item categories={item.submenu} >
								{ item.name }
							</Item>
						</Link>
					</Show>
				</>
			}</For>
		</div>
	);
};
