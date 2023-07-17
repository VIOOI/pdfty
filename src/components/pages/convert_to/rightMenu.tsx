import { RightMenu } from "@organisms/rightMenu/rightMenu";
import { useUnit } from "effector-solid";
import { VoidComponent } from "solid-js";

import addFile from "@media/icons/editor/rightMenu/plus.svg?raw";
import arrowRightCircle from "@media/icons/editor/arrow-right-circle.svg?raw";

import { sAddButton, sOptions } from "./convert_to.css";

import { HandleClickArgs, MergeHandleArgs } from "./utils";

import { InfoComponent } from "./info";

import { convertToRoute, Files } from ".";
import { useI18n } from "@solid-primitives/i18n";



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
	const [ t ] = useI18n();

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
						<h3>{ t(`tools.${params().tool}_to_pdf.title`) }</h3>
					</header>
					<main>
						<div class="info">
							{ t(`tools.${params().tool}_to_pdf.rightMenu.select`) }
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
