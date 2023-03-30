import { InputGroup as BlueprintField } from '@blueprintjs/core';
import { ErrorMessage, useField } from 'formik';

interface IProps {
	type: string;
	name: string;
	placeholder: string;
	className?: string;
}

const Field = (props: IProps) => {
	const [field] = useField(props);

	return (
		<>
			<BlueprintField
				{...field}
				{...props}
				autoComplete="off"
				bp="margin--sm"
				large={true}
				className={props.className}
			/>

			<ErrorMessage component="div" name={field.name} className="error" />
		</>
	);
};

export default Field;
