const allConstruct = (target, wordBank, memo = {}) => {
    if (target in memo) return memo[target];
    if (target === "") return [[]];
    const result = [];
    for (let word of wordBank) {
        if (target.indexOf(word) === 0){
            const suffix = target.slice(word.length); //gives us everything after word
            const suffixWays = allConstruct(suffix, wordBank, memo);
            const targetWays = suffixWays.map(way => [ word, ...way ]) //adds word to way array
            result.push(...targetWays); //spreads out targetways, instead of making 3 dimensional
        }
    }
    memo[target] = result;
    return result;
}
// > arr = [1, 2, 3, 4]
// [ 1, 2, 3, 4 ]
// > arr.map(el => el * 2)
// [ 2, 4, 6, 8 ]
console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"]));