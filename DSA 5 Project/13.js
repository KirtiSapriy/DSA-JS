// Q13 :- Balanced Paranthesis 

let str = " [{{{}}}]"

function BalancedParathesis(str) {

        let stack = []
        const obj = { "}": "{", "]": "[", ")": "(" }
        for (let el of str) {
                if (["{", "(", "["].includes(el)) {
                        stack.push(el)
                }
                else if (el >= 0 && el <= 9 || ['+', '-', '*', '/', ' '].includes(el)) {
                        continue;
                }
                else if (stack.length > 0 && stack.pop() != obj[el]) {
                        return false
                }

        }

        if (stack.length > 0) {
                return false
        }
        else {
                return true
        }

}
console.log(BalancedParathesis(str));
