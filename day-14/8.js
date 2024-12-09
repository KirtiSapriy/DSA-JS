let arr = [5, 6, 7, 1, 2, 3, 4]


let l = 0, r = arr.length - 1, target = 4;
let ans = -1

while (l <= r) {

        let mid = Math.floor((l + r) / 2)

        if (target == arr[mid]) {
                ans = mid
                return;
        }


        if (arr[l] <= arr[mid]) {
                if (target >= arr[l] && target < arr[mid]) {

                        r = mid - 1
                }


                else {

                        l = mid + 1

                }
        }
        else {

                if (target > arr[mid] && target <= arr[l]) {

                        l = mid + 1

                }
                else {

                        r = mid - 1
                }

        }
}

console.log(ans)
