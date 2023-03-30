import { Text } from '@blueprintjs/core';

interface IProps {
	title: string;
	tagName?: keyof JSX.IntrinsicElements;
	className?: string;
	bp?: string;
}

const Label = (props: IProps) => {
	const classes = `text-primary ${props.className && props.className}`;

	return (
		<Text tagName={props.tagName || 'h2'} className={classes} bp={props.bp}>
			{props.title}
		</Text>
	);
};

export default Label;
