let arr = [10, 11, 12, 13, 14, 18], target = 22;


let l = 0, r = arr.length - 1;

function SumPair(arr, l, r, target) {
        while (l <= r) {
                sum = arr[l] + arr[r]
                if (sum == target) {
                        return [l, r]
                }

                if (sum > target) {
                        r--
                }
                else {
                        l--
                }

        }

        return [-1, -1]
}

console.log(SumPair(arr, l, r, target));
