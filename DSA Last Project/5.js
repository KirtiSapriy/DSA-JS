// Write a function to reverse a string using a stack. Do not use built-in string reversal functions. Example:
// Input: "hello"
// Output: "olleh" 


let string = "hello"

function ReverseString(string) {
        let stack = []
        let string2 = ""

        for (let val of string) {
                stack.push(val)
        }
        for (let val of string) {
                string2 += stack.pop()
        }
        return string2
}

console.log(ReverseString(string));

