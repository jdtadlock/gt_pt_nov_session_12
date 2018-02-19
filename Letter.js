function Letter(char) {
	// this.blah = 'blah';
	this.char = char;
	this.guessed = false;
	
	// Classical Inheritance
	// this.myMethod = function() {

	// }
}

// Prototypal Inheritance
Letter.prototype.getLetter = function() {
	if ( this.guessed ) return this.char;
	
	// if ( this.char == ' ' ) return ' ';

	// return '_';
	return this.char.match(/\s/) ? ' ' : '_';
}

module.exports = Letter;

