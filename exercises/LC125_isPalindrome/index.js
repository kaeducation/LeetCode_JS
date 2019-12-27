function isPalindrome(s) {
    let onlyChar = s.toLowerCase().replace(/[\W_]/g, "");
    console.log(onlyChar);
    console.log(onlyChar.length - 1)

    for (let x = 0; x < onlyChar.length; x++) {
        if (onlyChar[x] !== onlyChar[onlyChar.length - 1 - x]) {
            return false;
        }
    }
    return true;
}

console.log(isPalindrome('love'));
console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome('_a__'));

module.exports = isPalindrome;
