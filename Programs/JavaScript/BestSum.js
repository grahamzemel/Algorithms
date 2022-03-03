const bestSum = (targetSum, numbers, memo={}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;
    let shortestCombonation = null;

    for (let num of numbers){
        const remainder = targetSum - num;
        const remainderCombonation = bestSum(remainder, numbers, memo); //either return array, or null
        if (remainderCombonation !== null){
            const combonation = [ ...remainderCombonation, num];
            //now to choose the shortest combo
            //if combo is shorter than current shortest, update
            if(shortestCombonation === null || combonation.length < shortestCombonation.length){ //checks length of arrays
                shortestCombonation = combonation;
            }
        }
    }
    memo[targetSum] = shortestCombonation;
    return shortestCombonation;
}

console.log(bestSum(7, [ 3, 4, 5, 7]));
console.log(bestSum(100, [1, 3, 5, 25])); 