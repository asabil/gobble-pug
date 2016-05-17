
function pug(source, options) {
	options.filename = this.src;

	return require('pug').render(source, options);
}

pug.defaults = {
	accept: [ '.jade', '.pug' ],
	ext: '.html'
};

module.exports = pug;
