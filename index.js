var Letter = require('./Letter');
var inquirer = require('inquirer');

var words = ['Superman', 'Batman', 'Wonderwoman', 'The Riddler', 'The Flash'];

function Hangman() {
	var self = this;
	this.word = [];

	this.getWord = function() {
		var ranWord = words[Math.floor(Math.random() * words.length)];

		ranWord.split('').forEach(function(val, index) {
			self.word.push(new Letter(val));
		});
	}

	this.printWord = function() {
		// var word = this.word.reduce(function(result, letter) {
		// 	return result += letter.getLetter();
		// }, '');		

		// console.log(this.word.reduce((res, let) => res += let.getLetter(), ''));
		
		var word = '';
		// word += ' one';
		// word += ' two';
		// word += ' three';
		for ( var i = 0; i < this.word.length; i++ ) {
			// Call the getLetter() on each Letter object
			word += this.word[i].getLetter();
		}

		console.log(word);
	}

	this.promptUser = function() {
		inquirer.prompt({
			name: 'char',
			message: 'Please choose a letter',
			validate: function(val) {
				return /[a-z]/i.test(val);
			}
		}).then(function(answer) {
			var correct = false;

			self.word.forEach(function(letter) {
				if ( letter.char.toLowerCase() == answer.char.toLowerCase() ) {
					correct = true;
					letter.guessed = true;
				}
			});
			
			console.log(correct ? 'Correct!' : 'Incorrect!');
			self.printWord();
			self.promptUser();
		});
	}

	this.start = function() {
		this.getWord();
		this.printWord();
		this.promptUser();
	}
}

var game = new Hangman();
game.start();







// console.log(new Letter());




















// Show a random word to user
	// convert each letter to either an underscore or letter if already guessed

// Allow user to choose a letter

// Alert user if they are correct or incorrect

// If incorrect, decrease totalGuesses by 1

// If totalGuesses is 0, user loses game

// If complete word is discovered, user wins game


// function test() {
// 	// this.name = name;
// }

// var obj = new test();
// console.log(obj);

// var jd = new test('JD'); // { name: 'JD' }

// var str = 'Some string'; 
// var fruits = ['apple', 'orange', 'grape'];
// console.log(typeof new test());
