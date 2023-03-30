import Header from '../ui/header/header';
import Footer from '../ui/footer/footer';

interface IProps {
	children: JSX.Element;
}

const Layout = (props: IProps) => {
	return (
		<>
			<Header />
			{props.children}
			<Footer />
		</>
	);
};

export default Layout;
