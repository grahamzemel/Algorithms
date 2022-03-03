const howSum = (targetSum, numbers, memo = {}) => {
    //use targetsum as key
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;
    for (let num of numbers){ //iterates per number in array
        const remainder = targetSum-num;
        const remainderResult = howSum(remainder, numbers, memo);
        if (remainderResult !== null){
            memo[targetSum] = [ ...remainderResult, num]; //returns copy of array from recursive call, with number added onto it
            return memo[targetSum];
        }
    }
    memo[targetSum] = null;
    return null;
}
//m = targetSum;
//n = numbers.length;

//bruteforce
//time = O(n^m * m)
//space = O(m)

//memoized
//time = O(n*m^2)
//space = O(m^2)
console.log(howSum(300, [7,14]));