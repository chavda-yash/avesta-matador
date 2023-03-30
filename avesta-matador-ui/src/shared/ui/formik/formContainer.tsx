interface IProps {
	children: JSX.Element;
}

const FormContainer = (props: IProps) => {
	return <div className="login-container">{props.children}</div>;
};

export default FormContainer;
