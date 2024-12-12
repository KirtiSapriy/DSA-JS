// Write a function to check if a given string containing parentheses is balanced. The function should return true if the string is balanced and false otherwise. Example:
// Input: "({[]})"
// Output: true
// Input: "([)]"
// Output: false

let TestC1 = "({[]})"
let TestC2 = "([)]"

function IsBalanced(test) {

        let stack = []
        let obj = { '}': '{', ')': '(', ']': '[' }

        for (let a = 0; a < test.length; a++) {
                if (['(', '{', '['].includes(test[a])) {
                        stack.push(test[a])
                }
                else if (['+', '-', '*', '/', ' '].includes(test[a]) || (test[a] >= 0 && test[a] <= 9)) {
                        continue;
                }
                else if (stack.length > 0 && stack.pop() != obj[test[a]]) {
                        return false;
                }
        }

        if (stack.length > 0) {
                return false
        }
        else {
                return true
        }

}

console.log(IsBalanced(TestC1));
console.log(IsBalanced(TestC2));

