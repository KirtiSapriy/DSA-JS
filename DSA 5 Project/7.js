//  Q7: Reverse String

let str = "hello"

function ReversStr(str) {

        let stack = []
        let ans = ""

        for (let el of str) {
                stack.push(el)
        }

        for (let el of str) {
                ans += stack.pop()
        }

        return ans
}

console.log(ReversStr(str));
