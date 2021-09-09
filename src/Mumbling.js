// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

function accum(s) {
    let arr = s.split('');
    let result = '';
    for (let i = 0; i < arr.length; i++) {
        if (i !== 0) {
            result += '-';
        }
        for (let j = 0; j < i + 1; j++) {
            result += j === 0 ? arr[i].toUpperCase() : arr[i].toLowerCase();
        }
    }
    return result;
}
