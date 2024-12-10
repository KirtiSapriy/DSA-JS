// Q10: Remove Spaces
let str = "hello world python"

let str2 = ""

for (let a = 0; a < str.length; a++) {
        if (str[a] != " ") {
                str2 += str[a]
        }
}

console.log(str2);
