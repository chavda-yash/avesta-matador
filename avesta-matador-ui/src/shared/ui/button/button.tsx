import { Button as BlueprintButton } from '@blueprintjs/core';

interface IProps {
	title: string;
	type?: 'submit' | 'reset' | 'button';
	className?: string;
	onClick?: () => void;
}

const Button = (props: IProps) => {
	return (
		<BlueprintButton
			text={props.title}
			type={props.type || 'button'}
			className={props.className || 'btn-primary'}
			onClick={props.onClick}
		/>
	);
};

export default Button;
