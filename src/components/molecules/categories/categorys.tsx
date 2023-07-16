import { Link } from "atomic-router-solid";
import { useUnit } from "effector-solid";
import { Accessor, Component } from "solid-js";
import { For } from "solid-js/web";

import { $icons } from "../../../stores/icons";

import { Categorie } from "../../../stores/categories";

import { sCategory } from "./categorys.css";




type CategoryMenuProps = {
  isOpen: Accessor<boolean>;
} & Categorie

export const CategoryMenu: Component<CategoryMenuProps> = ({ isOpen, categoryName, items }) => {
	const icons = useUnit($icons);

	return (
		<div class={sCategory()} classList={{ open: isOpen() }}>
			<h3> CategoryName {categoryName} </h3>
			<ul>
				{ items.map(item => (
					<Link to={`${item.link}`}>
						<li>
							<div class="icon" innerHTML={icons()[item.name]}></div>
							{item.name}
						</li>
					</Link>
				)) }
			</ul>
		</div>
	);
};
