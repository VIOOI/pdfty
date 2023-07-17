import { Link } from "atomic-router-solid";
import { ParentComponent } from "solid-js";

import { sButton } from "./button.css";

type Props = {
  type: "primary" | "light";
  rounded: "md" | "lg" | "full";
  link?: string;
  className?: string;
  outlined?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: (...args: any[]) => any;
};

export const Button: ParentComponent<Props> = 
	({ type, rounded, link, className, onClick, outlined, children }) => {
		const btn = (
			<div
				class={`${sButton({ type, outlined: outlined || null, rounded })} ${className}`}
				onClick={onClick}
			>
				{ children }
			</div>
		);

		return link ? <Link to={`index.html#${link}`}>{btn}</Link> : btn;
	};
