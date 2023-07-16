import { Card } from "@atoms/card/card";
import { EditorCards } from "@organisms/editorCards/editorCards";
import { $icons } from "@stores/icons";
import { trimAndAppendFileType } from "@utils/trimAndAppendFileType";
import { useUnit } from "effector-solid";

export const CardEditor = ({ params, files, deleteCard, setFiles, setProcess, setIsReadStream, setConvertFile, convertFile }) => {
	const icons = useUnit($icons);

	return <Show when={files.value.length > 0}>
		<EditorCards>
			<For each={files.value}>{ item =>
				<Card 
					type="info"
					title={trimAndAppendFileType(item.name)}
					size={item.size}
					trashFn={deleteCard(item.id)}
				>
					<canvas id={`page_${item.id}`}> </canvas>
				</Card>
			}</For>
			<RightMenuComponen
				functionAdd={() => handleClick({ setFiles, files, name: params().tool })}
				functionMerge={() => mergeHandle({ setIsReadStream, setProcess, files, setConvertFile, convertFile, name: params().tool })}
				isActive={() => files.value.length >= 1}
			/>
		</EditorCards>
	</Show>;
};
