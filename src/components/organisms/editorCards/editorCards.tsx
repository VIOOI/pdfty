import { ParentComponent } from "solid-js";

import { sEditorCards } from "./editorCards.css";

export const EditorCards: ParentComponent = ({ children }) => {
	return (
		<div class={sEditorCards()}>
			{ children }
		</div>
	);
};
