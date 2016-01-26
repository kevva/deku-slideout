# deku-slideout

> Slideout component for Deku


## Install

```
$ npm install --save deku-slideout
```


## Usage

```js
import Slideout from 'deku-slideout';

const onClick = setState => {
	return () => {
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

const render = ({state}) => {
	const {open} = state;

	return (
		<div>
			<button onClick={onClick(setState)}>Open menu!</button>
			<Slideout open={open} onClickOutside={onClickOutside(open, setState)}>
				Unicorns!
			</Slideout>
		</div>
	);
};

export default {render};
```


## License

MIT © [Kevin Martensson](http://github.com/kevva)
