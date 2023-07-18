/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createRoute } from "atomic-router";
import { useUnit } from "effector-solid";
import { createEffect, createSignal, For, on, onMount, Show, VoidComponent } from "solid-js";
import { createStore } from "solid-js/store";

import { Button } from "@atoms/botton/button";
import { ProgresBar } from "@atoms/progresBar/progresBar";
import { Card } from "@atoms/card/card";

import { EditorCards } from "@organisms/editorCards/editorCards";

import { LoadingPage } from "@pages/loadingPage";

import { trimAndAppendFileType } from "@utils/trimAndAppendFileType";

import { $icons } from "@stores/icons";

// import { useParams } from "@solidjs/router";

import { useI18n } from "@solid-primitives/i18n";

import { RightMenuComponent } from "./rightMenu";

import { downloadFile, handleClick, mergeHandle } from "./utils";
import { optimizeUrl } from "@utils/optimizeUrl";

export const convertFromRoute = createRoute<{ tool: string }>();


export type Files = {
	id: string,
	name: string,
	size: number,
	pages: number,
	file: File,
}

const InitiateConversion = ({ params, setFiles, files }) => {
	const [ t ] = useI18n();
	return <Show when={files.value.length === 0}>
		<LoadingPage>
			<h1>{ t(`tools.pdf_to_${params().tool}.title`) }</h1>
			<p>{ t(`tools.pdf_to_${params().tool}.description`) }</p>
			<Button 
				type="primary"
				rounded="md"
				onClick={() => handleClick({ setFiles, files, name: params.tool })}
			>
				{ t(`tools.pdf_to_${params().tool}.buttom`) }
			</Button>
			<p class="drop">{ t(`tools.pdf_to_${params().tool}.drop`) }</p>
		</LoadingPage>
	</Show>;
};

const CardEditor = ({ params, files, deleteCard, setFiles, setProcess, setIsReadStream, setConvertFile, convertFile, isReadStream }) => {
	// const icons = useUnit($icons);

	return <Show when={files.value.length > 0 && !isReadStream() && convertFile.value.length === 0}>
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
			<RightMenuComponent
				functionAdd={() => handleClick({ setFiles, files, name: params.tool })}
				functionMerge={() => mergeHandle({ setIsReadStream, setProcess, files, setConvertFile, convertFile, name: params.tool })}
				isActive={() => files.value.length >= 1}
			/>
		</EditorCards>
	</Show>;
};

const ConversionInProgress = ({ process, isReadStream }) => (
	<Show when={isReadStream()}>
		<LoadingPage>
			<h1> Uploading file </h1>
			<p></p>
			<ProgresBar value={process} />
			<p class="drop">or Drop</p>
		</LoadingPage>
	</Show>
);

const tools: Record<string, { file: string }> = {
	word: { file: "docx" },
	jpg: { file: "jpg" },
	excel: { file: "xlsx" },
	powerpoint: { file: "ppt" },
	html: { file: "html" },
};

const DownloadFiles = ({ convertFile, isReadStream }) => {
	const params = useUnit( convertFromRoute.$params );
	// const params = useParams();
	return <Show when={!isReadStream() && convertFile.value.length > 0}>
		<LoadingPage>
			<h1> Download Files </h1>
			<p>Description</p>
			<Button 
				type="primary"
				rounded="md"
				onClick={() => downloadFile({ files: convertFile, format: tools[params().tool].file })}
			>
        Download
			</Button>
			<p class="drop">or Drop</p>
		</LoadingPage>
	</Show>;
};

type FileStore = { value: Array<Files> };

type ConvertFileStore = { value: Array<string> };

const ConvertFrom: VoidComponent = () => {
	const [ files, setFiles ] = createStore<FileStore>({ value: [] });
	const [ convertFile, setConvertFile ] = createStore<ConvertFileStore>({ value: [] });
	const [ isReadStream, setIsReadStream ] = createSignal(false);
	const [ process, setProcess ] = createSignal(200);
	const params = useUnit(convertFromRoute.$params);

	const deleteCard = (id: string) => () => setFiles("value", f => f.filter(f => f.id !== id));

	onMount(() => optimizeUrl());


	createEffect(on(params, () => {
		setFiles("value", []); 
		setConvertFile("value", []);
	}));

	return (
		<div>
			<InitiateConversion params={params} setFiles={setFiles} files={files} />
			<CardEditor 
				params={params} 
				files={files} 
				deleteCard={deleteCard} 
				setFiles={setFiles} 
				setProcess={setProcess} 
				setIsReadStream={setIsReadStream} 
				setConvertFile={setConvertFile} 
				convertFile={convertFile} 
				isReadStream={isReadStream}
			/>
			<ConversionInProgress process={process} isReadStream={isReadStream} />
			<DownloadFiles convertFile={convertFile} isReadStream={isReadStream} />
		</div>
	);
};
export default ConvertFrom;
