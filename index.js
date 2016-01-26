/** @jsx dom */
import dom from 'magic-virtual-element';
import {render as r, tree} from 'deku';
import Slideout from '../';

const onClick = setState => {
	return e => {
		e.preventDefault();
		setState({open: true});
	};
};

const onClickOutside = (open, setState) => {
	return () => {
		if (open) {
			setState({open: false});
		}
	};
};

const render = ({state}, setState) => {
	const {open} = state;

	return (
		<div>
			<Slideout align='right' open={open} onClickOutside={onClickOutside(open, setState)}>
				<h3>This is a menu!</h3>
			</Slideout>
			<h1>Hello world!</h1>
			<button onClick={onClick(setState)}>Click me!</button>
		</div>
	);
};

const App = {render};
const app = tree(<App/>);

r(app, document.body);
