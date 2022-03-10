/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    if (x < 0) return false; 

    const myFunc = (num) => Number(num);

    const intArr = Array.from(String(x), myFunc);

    const reverse = [...intArr].reverse();

    return JSON.stringify(intArr) === JSON.stringify(reverse);

};

isPalindrome(121);
