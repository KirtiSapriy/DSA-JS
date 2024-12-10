//  Q8: Check Palindrome
let str = "A man, a plan, a canal: Panama"


function isPalindrome(str) {
        let stack = []
        let ans = ""

        for (let el of str) {
                if ((el >= 'a' && el <= 'z') || (el >= 'A' && el <= 'Z')) {
                        stack.push(el)

                }
        }
        let str2 = stack.join("")
        for (let el of str2) {
                ans += stack.pop()
        }



        return ans.toLowerCase() == str2.toLowerCase()

}

console.log(isPalindrome(str))
