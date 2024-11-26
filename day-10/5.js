
let a = [2, 5, 3, 4, 1]


function add(n, a) {

        if (a == 0) {
                return n[a]
        }

        return n[a] + add(n, a - 1)

}
console.log(add(a, a.length - 1))

