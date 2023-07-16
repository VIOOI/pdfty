import { RightMenu } from "@organisms/rightMenu/rightMenu";
import { useUnit } from "effector-solid";
import { VoidComponent } from "solid-js";

import addFile from "@media/icons/editor/rightMenu/plus.svg?raw";
import arrowRightCircle from "@media/icons/editor/arrow-right-circle.svg?raw";

import { sAddButton, sOptions } from "./convert_to.css";

import { HandleClickArgs, MergeHandleArgs } from "./utils";

import { InfoComponent } from "./info";

import { convertToRoute, Files } from ".";



export const RightMenuComponent: VoidComponent<{
	functionAdd: () => any,
	functionMerge: () => any,
	isActive: () => boolean,
}> = ({
	functionAdd,
	functionMerge,
	isActive,
}) => {
	const params = useUnit(convertToRoute.$params);

	return (
		<RightMenu.Menu> 
			<RightMenu.Buttons> 
				<div class={sAddButton()}
					onClick={functionAdd}
					innerHTML={addFile}
				></div>
			</RightMenu.Buttons>
			<RightMenu.Options>
				<div class={sOptions()}>
					<header>
						<h3>Title</h3>
					</header>
					<main>
						<div class="info">
										Please, select more PDF files by clicking again on 
										’Select PDF files’.Select multiple files by 
										mantaining pressed ’Ctrl’
						</div>
						<div
							class="handle_buttons"
							classList={{ "active": isActive() }} 
							onClick={functionMerge}
						>
										Convert to {params().tool.replace(/(?:^|\s)\S/g, (f: string) => f.toUpperCase())} 
							<div innerHTML={arrowRightCircle}></div>
						</div>
					</main>
				</div>
			</RightMenu.Options>
		</RightMenu.Menu>
	);
};
