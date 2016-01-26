/** @jsx dom */
import dom from 'magic-virtual-element';
import {render as r, tree} from 'deku';
import Slideout from '../';

const onClick = (align, setState) => {
	return e => {
		e.preventDefault();
		setState({[align === 'left' ? 'openLeft' : 'openRight']: true});
	};
};

const onClickOutside = (open, align, setState) => {
	return () => {
		if (open) {
			setState({[align === 'left' ? 'openLeft' : 'openRight']: false});
		}
	};
};

const render = ({state}, setState) => {
	const {openLeft, openRight} = state;

	return (
		<div>
			<main>
				<h1>Hello world!</h1>
				<button onClick={onClick('left', setState)}>Toggle left menu!</button>
				<button onClick={onClick('right', setState)}>Toggle right menu!</button>
			</main>
			<Slideout align='left' open={openLeft} onClickOutside={onClickOutside(openLeft, 'left', setState)}>
				<h3>This is a menu!</h3>
			</Slideout>
			<Slideout align='right' open={openRight} onClickOutside={onClickOutside(openRight, 'right', setState)}>
				<h3>This is a menu!</h3>
			</Slideout>
		</div>
	);
};

const App = {render};
const app = tree(<App/>);

r(app, document.body);
