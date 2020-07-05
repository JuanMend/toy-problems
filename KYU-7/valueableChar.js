// you will be given a string and your task is to return the most valuable character.
// The value of a character is the difference between the index of its last occurrence and the index of its first occurrence.
// Return the character that has the highest value. If there is a tie, return the lexicographically lowest character. [For Golang return rune]

// All inputs will be lower case.

// For example:
// solve('a') = 'a'
// solve('ab') = 'a'. Last occurrence is equal to first occurrence of each character. Return lexicographically lowest.
// solve("axyzxyz") = 'x'

function solve(st) {
	let maxDiff = 0,
		result = 'z';
	for (let el of st) {
		let diff = st.lastIndexOf(el) - st.indexOf(el);
		if (maxDiff < diff || (maxDiff == diff && el <= result)) {
			result = el;
			maxDiff = diff;
		}
	}
	return result;
}

console.log(solve('axyzxyz'));
