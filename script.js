setInterval(() => {
	document.dispatchEvent(new KeyboardEvent('keydown', {'key': 'enter'}))
}, 10);
