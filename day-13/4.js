let a = [1, 2, 3, 4], b = [3, 4, 5, 6];
let set = new Set(a)

function findIntersection() {
        let ans = []

        for (el of b) {

                if (set.has(el)) {
                        ans.push(el)
                }
                set.add(el)

        }

        return ans
}

console.log(findIntersection(set, b));
