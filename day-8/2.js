let n = "hello";
let b = n.split("")
let l = 0, r = n.length - 1;

while (l < r) {

        let tem = b[l];
        b[l] = b[r]
        b[r] = tem
        
        l++;
        r--

}
n = b.join("")

console.log(n)