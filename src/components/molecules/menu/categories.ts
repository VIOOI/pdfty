export type Categorie = {
  categoryName: string;
  items: Array<{
    icon: string;
    name: string;
    link: string;
  }>;
};
type menuList = {
  name: string;
  submenu: Array<Categorie>;
  link: string;
};
export default [
	{
		name: "merge_pdf",
		submenu: [],
		link: "merge_pdf",
	},
	{
		name: "split_pdf",
		submenu: [],
		link: "merge_pdf",
	},
	{
		name: "compress_pdf",
		submenu: [],
		link: "merge_pdf",
	},
	{
		name: "convert_pdf",
		link: "",
		submenu: [
			{
				categoryName: "convert_pdf",
				items: [
					{ name: "jpg_to_pdf", link: "/convert_to/jpg" },
					{ name: "word_to_pdf", link: "/convert_to/word" },
					{ name: "powerpoint_to_pdf", link: "/convert_to/powerpoint" },
					{ name: "html_to_pdf", link: "/convert_to/html" },
				],
			},
			{
				categoryName: "convert_from_pdf",
				items: [
					{ name: "pdf_to_jpg", link: "/convert_from/jpg" },
					{ name: "pdf_to_word", link: "convert_from/word" },
					{ name: "pdf_to_powerpoint", link: "/convert_from/powerpoint" },
					{ name: "pdf_to_excel", link: "/convert_from/excel" },
					{ name: "pdf_to_pdfa", link: "/convert_from/pdfa" },
				],
			},
		],
	},
	{
		name: "all_pdf_tools",
		link: "merge_pdf",
		submenu: [
			{
				categoryName: "convert_pdf",
				items: [
					{ name: "jpg_to_pdf", link: "" },
					{ name: "word_to_pdf", link: "" },
					{ name: "powerpoint_to_pdf", link: "" },
					{ name: "excel_to_pdf", link: "" },
					{ name: "html_to_pdf", link: "" },
				],
			},
			{
				categoryName: "convert_from_pdf",
				items: [
					{ name: "pdf_to_jpg", link: "" },
					{ name: "pdf_to_word", link: "" },
					{ name: "pdf_to_powerpoint", link: "" },
					{ name: "pdf_to_excel", link: "" },
					{ name: "pdf_to_pdfa", link: "" },
				],
			},
			{
				categoryName: "convert_pdf",
				items: [
					{ name: "jpg_to_pdf", link: "" },
					{ name: "word_to_pdf", link: "" },
					{ name: "powerpoint_to_pdf", link: "" },
					{ name: "excel_to_pdf", link: "" },
					{ name: "html_to_pdf", link: "" },
				],
			},
			{
				categoryName: "convert_from_pdf",
				items: [
					{ name: "pdf_to_jpg", link: "" },
					{ name: "pdf_to_word", link: "" },
					{ name: "pdf_to_powerpoint", link: "" },
					{ name: "pdf_to_excel", link: "" },
					{ name: "pdf_to_pdfa", link: "" },
				],
			},
			{
				categoryName: "convert_pdf",
				items: [
					{ name: "jpg_to_pdf", link: "" },
					{ name: "word_to_pdf", link: "" },
					{ name: "powerpoint_to_pdf", link: "" },
					{ name: "excel_to_pdf", link: "" },
					{ name: "html_to_pdf", link: "" },
				],
			},
			{
				categoryName: "convert_from_pdf",
				items: [
					{ name: "pdf_to_jpg", link: "" },
					{ name: "pdf_to_word", link: "" },
					{ name: "pdf_to_powerpoint", link: "" },
					{ name: "pdf_to_excel", link: "" },
					{ name: "pdf_to_pdfa", link: "" },
				],
			},
		],
	},
] as Array<menuList>;
