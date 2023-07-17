import { Link } from "atomic-router-solid";
import { useUnit } from "effector-solid";
import { Accessor, Component } from "solid-js";
import { For } from "solid-js/web";
import { useI18n } from "@solid-primitives/i18n";

import { $icons } from "../../../stores/icons";

import { Categorie } from "../../../stores/categories";

import { sCategory } from "./categorys.css";

type CategoryMenuProps = {
  isOpen: Accessor<boolean>;
} & Categorie

export const CategoryMenu: Component<CategoryMenuProps> = ({ isOpen, categoryName, items }) => {
	const icons = useUnit($icons);
	const [ t ] = useI18n();

	return (
		<div class={sCategory()} classList={{ open: isOpen() }}>
			<h3>{ t(`menu.categories.${categoryName}`) }</h3>
			<ul>
				{ items.map(item => (
					<Link to={`index.html#${item.link}`}>
						<li>
							<div class="icon" innerHTML={icons()[item.name]}></div>
							{ t(`tools.${item.name}.title`) }
						</li>
					</Link>
				)) }
			</ul>
		</div>
	);
};
