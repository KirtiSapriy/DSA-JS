let arr = [1, 3, 5, 7, 9, 11];

let target = 7;

let l = 0, r = arr.length - 1, ans = -1;

while (l <= r) {
        let mid = Math.floor((l + r) / 2)

        if (target == arr[mid]) {
                ans = mid;
                break;
        }
        if (arr[mid] > target) {
                r = mid - 1
        }
        else {
                l = mid + 1
        }
}

console.log(ans);
