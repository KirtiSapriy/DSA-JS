let arr = [2, 4, 6, 12, 26, 78]
let target = 12;
let l = 0;
let r = arr.length - 1

while (l <= r) {
        let mid = Math.floor((l + r) / 2)

        if (arr[mid] == target) {

                console.log(mid);
                break;

        }

        if (arr[mid] > target) {
                r = mid - 1
        }
        if (arr[mid] < target) {
                l = mid + 1
        }
}

