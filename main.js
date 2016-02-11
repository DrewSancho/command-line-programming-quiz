var prompt = require ('prompt-sync').prompt

console.log('Are you ready for a quiz?');

var ready = prompt();

console.log('I do not care whether you do or do not, you are doing it anyway.');

var start = Date.now();

var total = 0;

console.log('Question 1: What Boolean operator does JS not support?: &&, ||, !, >>');

var a1 = prompt();

if (a1 === '>>') {
	console.log('Congratulations ' + a1 + ' was correct!!!');
	
	total++
}	
	else if (a1 === '&&') {
		console.log('I am sorry ' + a1 +' was not the right choice, >> was the correct answer.' );
	}
	else if (a1 === '||') {
		console.log('I am sorry ' + a1 +' was not the right choice, >> was the correct answer.' );
	}
	else if (a1 === '!') {
		console.log('I am sorry ' + a1 +' was not the right choice, >> was the correct answer.' );
	}

console.log('Question 2: What does the M in html stand for?: Markdown, Markup, Makeup, Mention');

var a2 = prompt();

if (a2.toLowerCase() === 'markup') {
	console.log('Congratulations ' + a2 + ' was correct!!!');
	
	total++
}
	else if (a2.toLowerCase() === 'markdown') {
		console.log('I am sorry ' + a2 +' was not the right choice, markup was the correct answer.' );
	}
	else if (a2.toLowerCase() === 'makeup') {
		console.log('I am sorry ' + a2 +' was not the right choice, markup was the correct answer.' );
	}
	else if (a2.toLowerCase() === 'mention') {
		console.log('I am sorry ' + a2 +' was not the right choice, markup was the correct answer.' );
	}

console.log('Question 3: What does the P in NPM mean?: Project, Precise, Pocket, Package')

var a3 = prompt();

if (a3.toLowerCase() === 'package') {
	console.log('Congratulations ' + a3 + ' was correct!!!');
	
	total++
}
	else if (a3.toLowerCase() === 'project') {
		console.log('I am sorry ' + a3 +' was not the right choice, package was the correct answer.' );
	}
	else if (a3.toLowerCase() === 'precise') {
		console.log('I am sorry ' + a3 +' was not the right choice, package was the correct answer.' );
	}
	else if (a3.toLowerCase() === 'pocket') {
		console.log('I am sorry ' + a3 +' was not the right choice, package was the correct answer.' );
	}

console.log('Question 4: In JS, what is 5 + (2 * 7) =: 49, 19, 37, I do not know')

var a4 = prompt();

if (a4.toLowerCase() === '19') {
	console.log('Congratulations ' + a4 + ' was correct!!!');

	total++
}
	else if (a4.toLowerCase() === '49') {
		console.log('I am sorry ' + a4 +' was not the right choice, 19 was the correct answer.' );
	}
	else if (a4.toLowerCase() === '37') {
		console.log('I am sorry ' + a4 +' was not the right choice, 19 was the correct answer.' );
	}
	else if (a4.toLowerCase() === 'i do not know') {
		console.log('I am sorry ' + a4 +' was not the right choice, 19 was the correct answer.' );
	}

console.log('Question 5: In JS, what does double ! equal?: False, Double False, True, Double True');

var a5 = prompt();

if (a5.toLowerCase() === 'double false') {
	console.log('Congratulations ' + a5 + ' was correct!!!');

	total++	
}
	else if (a5.toLowerCase() === 'false') {
		console.log('I am sorry ' + a5 +' was not the right choice, doulbe false was the correct answer.' );
	}
	else if (a5.toLowerCase() === 'true') {
		console.log('I am sorry ' + a5 +' was not the right choice, doulbe false was the correct answer.' );
	}
	else if (a5.toLowerCase() === 'double true') {
		console.log('I am sorry ' + a5 +' was not the right choice, doulbe false was the correct answer.' );
	}

console.log('Question 6: In CSS, if your box-sizing is set correct but your items are not floating correctly, which should you check?: Border, Padding, Gutter, Margin');

var a6 = prompt();

if (a6.toLowerCase() === 'margin') {
	console.log('Congratulations ' + a6 + ' was correct!!!');

	total++
}
	else if (a6.toLowerCase() === 'border') {
		console.log('I am sorry ' + a6 +' was not the right choice, margin was the correct answer.' );
	}
	else if (a6.toLowerCase() === 'padding') {
		console.log('I am sorry ' + a6 +' was not the right choice, margin was the correct answer.' );
	}
	else if (a6.toLowerCase() === 'gutter') {
		console.log('I am sorry ' + a6 +' was not the right choice, margin was the correct answer.' );
	}

console.log('Question 7: In HTML: which is a valid tag: </head>, <margin>, <if>, <oli>');

var a7 = prompt();

if (a7.toLowerCase() === '</head>') {
	console.log('Congratulations ' + a7 + ' was correct!!!');

	total++
}
	else if (a7.toLowerCase() === '<margin>') {
		console.log('I am sorry ' + a7 +' was not the right choice, </head> was the correct answer.' );
	}
	else if (a7.toLowerCase() === '<if>') {
		console.log('I am sorry ' + a7 +' was not the right choice, </head> was the correct answer.' );
	}
	else if (a7.toLowerCase() === '<oli>') {
		console.log('I am sorry ' + a7 +' was not the right choice, </head> was the correct answer.' );
	}

console.log('Question 8: What tag do you use to point your HTML to your CSS?: <ul>, <title>, <a href>, <link>');

var a8 = prompt();

if (a8.toLowerCase() === '<link>') {
	console.log('Congratulations ' + a8 + ' was correct!!!');

	total++
}
	else if (a8.toLowerCase() === '<ul>') {
		console.log('I am sorry ' + a8 +' was not the right choice, <link> was the correct answer.' );
	}
	else if (a8.toLowerCase() === '<title>') {
		console.log('I am sorry ' + a8 +' was not the right choice, <link> was the correct answer.' );
	}
	else if (a8.toLowerCase() === '<a href>') {
		console.log('I am sorry ' + a8 +' was not the right choice, <link> was the correct answer.' );
	}

console.log('Question 9: Do you need CSS to display HTML?: Yes, No');

var a9 = prompt();

if (a9.toLowerCase() === 'no') {
	console.log('Congratulations ' + a9 + ' was correct!!!');

	total++
}
	else if (a9.toLowerCase() === 'yes') {
		console.log('I am sorry ' + a9 +' was not the right choice, no was the correct answer.' );
	}
 
 console.log('Question 10: What does the second T in HTTP mean?: Text, Type, Topic, Transfer. ');

 var a10 = prompt();

 if (a10.toLowerCase() === 'transfer') {
	console.log('Congratulations ' + a10 + ' was correct!!!');

	total++
}
	else if (a10.toLowerCase() === 'text') {
		console.log('I am sorry ' + a10 +' was not the right choice, transfer was the correct answer.' );
	}
	else if (a10.toLowerCase() === 'type') {
		console.log('I am sorry ' + a10 +' was not the right choice, transfer was the correct answer.' );
	}
	else if (a10.toLowerCase() === 'topic') {
		console.log('I am sorry ' + a10 +' was not the right choice, transfer was the correct answer.' );
	}

console.log('Question 11: What does || mean: And, Or, Both, Neither.');

var a11 = prompt();

if (a11.toLowerCase() === 'or') {
	console.log('Congratulations ' + a11 + ' was correct!!!');

	total++
}
	else if (a11.toLowerCase() === 'and') {
		console.log('I am sorry ' + a11 +' was not the right choice, or was the correct answer.' );
	}
	else if (a11.toLowerCase() === 'both') {
		console.log('I am sorry ' + a11 +' was not the right choice, or was the correct answer.' );
	}
	else if (a11.toLowerCase() === 'neither') {
		console.log('I am sorry ' + a11 +' was not the right choice, or was the correct answer.' );
	}

console.log('Question 12: In JSON, what does the O mean: Operator, Object, Operation, One');

var a12 = prompt();

if (a12.toLowerCase() === 'object') {
	console.log('Congratulations ' + a12 + ' was correct!!!');

	total++
}
	else if (a12.toLowerCase() === 'operator') {
		console.log('I am sorry ' + a12 +' was not the right choice, Object was the correct answer.' );
	}
	else if (a12.toLowerCase() === 'operation') {
		console.log('I am sorry ' + a12 +' was not the right choice, Object was the correct answer.' );
	}
	else if (a12.toLowerCase() === 'one') {
		console.log('I am sorry ' + a12 +' was not the right choice, Object was the correct answer.' );
	}

console.log('Question 13: This %, equals what in JS syntax: Percent, Divide By, Modulo, Module');

var a13 = prompt();

if (a13.toLowerCase() === 'modulo') {
	console.log('Congratulations ' + a13 + ' was correct!!!');

	total++
}
	else if (a13.toLowerCase() === 'module') {
		console.log('I am sorry ' + a13 +' was not the right choice, Modulo was the correct answer.' );
	}
	else if (a13.toLowerCase() === 'divided by') {
		console.log('I am sorry ' + a13 +' was not the right choice, Modulo was the correct answer.' );
	}
	else if (a13.toLowerCase() === 'percent') {
		console.log('I am sorry ' + a13 +' was not the right choice, Modulo was the correct answer.' );
	}

console.log('Question 14: What type is the result of a concatenated number and string?: String, Number, False, True');

var a14 = prompt();

if (a14.toLowerCase() === 'string') {
	console.log('Congratulations ' + a14 + ' was correct!!!');

	total++
}
	else if (a14.toLowerCase() === 'newnumber') {
		console.log('I am sorry ' + a14 +' was not the right choice, string was the correct answer.' );
	}
	else if (a14.toLowerCase() === 'false') {
		console.log('I am sorry ' + a14 +' was not the right choice, string was the correct answer.' );
	}
	else if (a14.toLowerCase() === 'true') {
		console.log('I am sorry ' + a14 +' was not the right choice, string was the correct answer.' );
	}

console.log('Question 15: What is the airspeed velocity of an unladened swallow?: I do not know, African, European, 11mps.');

var a15 = prompt();

if (a15.toLowerCase() === '11mps') {
	console.log('Congratulations ' + a15 + ' was correct!!!');

	total++
}
	else if (a15.toLowerCase() === 'i dont know') {
		console.log('I am sorry ' + a15 +' was not the right choice, 11mps was the correct answer.' );
	}
	else if (a15.toLowerCase() === 'african') {
		console.log('I am sorry ' + a15 +' was not the right choice, 11mps was the correct answer.' );
	}
	else if (a15.toLowerCase() === 'european') {
		console.log('I am sorry ' + a15 +' was not the right choice, 11mps was the correct answer.' );
	}

var stop = Date.now();

console.log('You got ' + total + ' out of 15');

if (total / 15 * 100 >= 92) {
	console.log('Good Job, you got an A');
} 
	
	else if (total / 15 * 100 >= 84) {
		console.log('Nice effort, you got a B');
	}
	else if (total / 15 * 100 >= 76) {
		console.log('Decent enough, you got a C');
	}
	else if (total / 15 * 100 < 75) {
		console.log('SMH');
	}

var time = ((stop - start) / 1000 ) / 60;

console.log('It took you ' + time + ' minutes to finish.');

console.log('How would you rate this quiz 0 - 10');

var rating = prompt();

if (rating == 9 || rating == 10) {
	console.log('Thank you for your feedback.');
}
	else if (rating <= 8) {
		console.log ("I'll try harder next time");
	}
