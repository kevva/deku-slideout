/** @jsx dom */
import clickOutside from 'click-outside';
import dom from 'magic-virtual-element';

const propTypes = {
	align: {
		type: 'string'
	},
	children: {
		type: 'array'
	},
	class: {
		type: 'string'
	}
};

const defaultProps = {
	align: 'left'
};

const afterRender = ({props}, el) => {
	const {onClickOutside} = props;

	if (onClickOutside) {
		clickOutside(el, onClickOutside);
	}
};

const render = ({props}) => {
	const {align, children, open} = props;
	const style = {
		position: 'fixed',
		top: 0,
		[align]: 0,
		bottom: 0,
		width: '100%',
		transform: `translateX(${open ? '0%' : align === 'left' ? '-100%' : '100%'})`
	};

	return (
		<div class={['Slideout', props.class]} style={style}>
			{children}
		</div>
	);
};

export default {afterRender, defaultProps, propTypes, render};
