//  Q9: Convert to Uppercase
let str = "hello world"
let str2 = str.split("")

for (let a = 0; a < str.length - 1; a++) {

        if (a == 0 || str[a - 1] == " ") {
                str2[a] = str2[a].toUpperCase()
        }
}

console.log(str2.join(""));
