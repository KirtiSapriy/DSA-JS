// Create a program that uses a Map to count the frequency of each character in a string.Also, demonstrate the use of a Set to store only unique characters from the same string. 


let MyMap = new Map()
let string = "hello"
let MySet = new Set(string)



for (let el of string) {
        if (MyMap.has(el)) {
                MyMap.set(el, MyMap.get(el) + 1)
        }
        else {
                MyMap.set(el, 1)
        }
}
console.log(MyMap);

