type SizeUnit = "b" | "kb" | "mb" | "gb" | "tb" | "pb" | "eb" | "zb" | "yb";
type FormattedSize = { size: string; unit: SizeUnit };

export function formatBytes(bytes: number, decimals = 2): FormattedSize {
	const sizes = new Map<number, SizeUnit>([
		[ 0, "b" ],
		[ 1, "kb" ],
		[ 2, "mb" ],
		[ 3, "gb" ],
		[ 4, "tb" ],
		[ 5, "pb" ],
		[ 6, "eb" ],
		[ 7, "zb" ],
		[ 8, "yb" ],
	]);

	const i = bytes === 0 ? 0 : Math.floor(Math.log(bytes) / Math.log(1024));
	const size = bytes / Math.pow(1024, i);

	return {
		size: size.toFixed(Math.max(0, decimals)),
		unit: sizes.get(i) as SizeUnit,
	};
}
