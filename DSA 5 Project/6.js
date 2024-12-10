// Q6: Count Vowels
let str = "hello world"

function CountVowels(str) {

        let l = 0, r = str.length - 1;
        let count = 0;

        while (l <= r) {
                let a = ['a', 'e', 'i', 'o', 'u']

                if (a.includes(str[l])) {
                        count++
                }

                if (a.includes(str[r])) {
                        count++
                }

                l++
                r--
        }

        return count

}

console.log(CountVowels(str));
