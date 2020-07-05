// you are asked to square every digit of a number.

// For example,
// if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

function squareDigits(num) {
	let str = num.toString();
	let results = [];
	for (let i = 0; i < str.length; i++) {
		results[i] = str[i] * str[i];
	}
	return Number(results.join(''));
}

console.log(squareDigits(9119));
