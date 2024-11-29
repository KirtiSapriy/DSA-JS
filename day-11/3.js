let a = [2, 4, 6, 8, 12, 12, 12, 46]

let target = 12;
let l = 0, r = a.length;
let re = -1

while (l <= r) {

        let mid = Math.floor((l + r) / 2)

        if (a[mid] == target) {
                re = mid
                l = mid + 1
        }
        if (a[mid] > target) {
                r = mid - 1
        }
        if (a[mid] < target) {
                l = mid + 1
        }

}
console.log(re);
