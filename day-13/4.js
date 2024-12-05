let a = [1, 2, 3, 4], b = [3, 4, 5, 6];
let set = new Set()
let ans = []


for (el of a) {
        set.add(el)
}
for (el of b) {

        if (set.has(el)) {
                ans.push(el)
        }
        else {
                set.add(el)
        }

}

console.log(ans);
