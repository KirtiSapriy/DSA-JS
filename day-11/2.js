let a = [2, 4, 6, 12, 23, 23]
let target = 23;

let l = 0, r = a.length - 1;

let re = -1

while (l <= r) {

        let mid = Math.floor((l + r) / 2)

        if (a[mid] == target) {
                re = mid
                r = mid - 1
        }

        if (a[mid] > target) {
                r = mid - 1
        }
        if (a[mid] < target) {
                l = mid + 1
        }

}

console.log(re);

