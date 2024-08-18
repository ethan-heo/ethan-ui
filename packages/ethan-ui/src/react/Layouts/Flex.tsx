import React from "react";
import createBEMSelector from "../../utils/createBEMSelector";
import { PickCSSProperty } from "../../types/utils";
import { LayoutProps } from "./Layouts.types";
import "./Flex.styles.css";
import "./Layouts.styles.css";

export interface FlexProps extends React.HTMLAttributes<HTMLElement> {
	justify?: PickCSSProperty<
		"justifyContent",
		| "flex-start"
		| "flex-end"
		| "center"
		| "space-between"
		| "space-around"
		| "space-evenly"
	>;
	align?: PickCSSProperty<"alignItems", "flex-start" | "center" | "flex-end">;
	vertical?: boolean;
	reverse?: boolean;
	wrap?: boolean;
	gap?: boolean;
}

const Flex = <Tag extends React.ElementType>({
	justify = "flex-start",
	align = "flex-start",
	vertical,
	reverse,
	gap,
	wrap,
	children,
	className,
	as,
	column = "col-12",
	...props
}: LayoutProps<Tag, FlexProps>) => {
	const Component = as || "div";
	const block = "flex";
	const blockClassName = createBEMSelector({
		block,
	});
	const justifyClassName = createBEMSelector({
		block,
		modifier: ["justify", justify],
	});
	const alignClassName = createBEMSelector({
		block,
		modifier: ["align", align],
	});
	let columnClassName;
	let reverseClassname;
	let gapClassname;
	let wrapClassname;
	let verticalClassname;

	if (reverse) {
		reverseClassname = createBEMSelector({
			block,
			modifier: ["reverse"],
		});
	}
	if (gap) {
		gapClassname = createBEMSelector({
			block,
			modifier: ["gap"],
		});
	}
	if (wrap) {
		wrapClassname = createBEMSelector({
			block,
			modifier: ["wrap"],
		});
	}
	if (vertical) {
		verticalClassname = createBEMSelector({
			block,
			modifier: ["vertical"],
		});
	}
	if (column) {
		columnClassName = Array.isArray(column) ? column.join(" ") : column;
	}

	const classNames = [
		blockClassName,
		justifyClassName,
		alignClassName,
		columnClassName,
		reverseClassname,
		gapClassname,
		wrapClassname,
		verticalClassname,
		className,
	];

	return (
		<Component className={classNames.filter(Boolean).join(" ")} {...props}>
			{children}
		</Component>
	);
};

export default Flex;