let str = "hello"

let stack = []

for (let el of str) {
        stack.push(el)
}

let ReversStr = ""

while (stack.length > 0) {
        ReversStr += stack.pop()
}

console.log(ReversStr);