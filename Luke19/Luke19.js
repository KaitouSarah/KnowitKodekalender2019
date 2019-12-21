
function isPalindrome(str) {
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] != str[str.length - 1 - i] || str.length < 2) {
            return false;
        }
    }
    return true;
}
function reverseNumber(n)
{
	n = n + "";
	return parseInt(n.split("").reverse().join(""), 10);
}

let hiddenPalCounter = 0;
for (let i = 1; i < 123454321; i++) {
    if (!isPalindrome(i.toString())) {
        let sum = i + reverseNumber(i);
        if (isPalindrome(sum.toString())) {
            hiddenPalCounter+=i;
        }    
    }    
}
console.log(hiddenPalCounter);
