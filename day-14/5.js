let a = [1, 2, 4, 6, 8, 10], target = 4;

let ans = -1, l = 0; r = a.length - 1;

while (l <= r) {
        let mid = Math.floor((l + r) / 2)

        if (a[mid] == target) {
                ans = mid
                break;
        }

        if (target >= a[mid]) {
                l = mid + 1
        }
        else {
                r = mid - 1
        }
}

console.log(ans);

