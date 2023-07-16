import { Component } from "solid-js";



import { Link } from "atomic-router-solid";
import { Menu } from "@molecules/menu/menu";

import { Button } from "@atoms/botton/button";

import logo from "../../../media/icons/main/logo.svg?raw";

import { header } from "./header.css";

export const Header: Component = () => {
	return <div class={header()}>
		<Link to="/" innerHTML={logo}> </Link>
		<Menu />
		<div class="loging">
			<dvi></dvi>
			<dvi></dvi>
		</div>
	</div>;
};
			// <Button type="light" rounded="lg" >Login</Button>
			// <Button type="primary" rounded="lg" >Login</Button>
