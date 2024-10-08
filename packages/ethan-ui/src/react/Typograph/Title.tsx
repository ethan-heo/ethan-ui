import React, { HTMLAttributes } from "react";
import { TypographCommonProps } from "./Typograph.types";
import createTypographClassnames from "./utils/createTypographClassnames";

type Level = 1 | 2 | 3;

export interface TitleProps
	extends TypographCommonProps,
		HTMLAttributes<HTMLHeadingElement> {
	level?: Level;
}

const Title: React.FC<TitleProps> = ({
	level = 1,
	italic,
	underline,
	del,
	mark,
	strong,
	variant = "default",
	className,
	children,
	...props
}) => {
	const classNames = createTypographClassnames(
		`heading${level}`,
		{
			italic,
			underline,
			del,
			mark,
			strong,
			variant,
		},
		className,
	);

	switch (level) {
		case 2:
			return (
				<h2 className={classNames} {...props}>
					{children}
				</h2>
			);
		case 3:
			return (
				<h3 className={classNames} {...props}>
					{children}
				</h3>
			);
		default:
			return (
				<h1 className={classNames} {...props}>
					{children}
				</h1>
			);
	}
};

export default Title;
