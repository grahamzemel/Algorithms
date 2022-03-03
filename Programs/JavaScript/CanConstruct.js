const canConstruct = (target, wordBank, memo = {}) => {
    if (target in memo) return memo[target];
    if (target === "") return true;

    for (let word of wordBank){
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);//creates part of original target
            if (canConstruct(suffix, wordBank, memo) === true){ //now can i make the suffux left over from the word using wordbank?
                memo[target] = true;
                return true;
            }
                
        }
    }
    memo[target] = false;
    return false;
}
// > word = "pot"
// 'pot'
// > target = "potato"
// 'potato'
// > target.indexOf(word)
// 0
// > target.slice(word.length)
// 'ato'
console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));