/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const V = 5
    const X = 10
    const L = 50
    const C = 100
    const D = 500
    const M = 1000
    const I = 1

    let sum = 0;
    for(let x of s){
        switch(x){
            case('V'): sum += V; break;
            case('X'): sum += X; break;
            case('L'): sum += L; break;
            case('C'): sum += C; break;
            case('D'): sum += D; break;
            case('M'): sum += M; break;
            case('I'): sum += I; break;
            default: break;
        }
    }
    console.log(sum);
    return sum;
};
romanToInt('MCMXCIV');