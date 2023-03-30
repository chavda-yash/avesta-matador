import { Checkbox as BlueprintCheckbox } from '@blueprintjs/core';
import { useField } from 'formik';

interface IProps {
	children: string;
	name: string;
}

const Checkbox = ({ children, ...props }: IProps) => {
	const [field] = useField(props);

	return (
		<BlueprintCheckbox
			label={children}
			{...field}
			{...props}
			type="checkbox"
			className="checkbox-input"
		></BlueprintCheckbox>
	);
};

export default Checkbox;
