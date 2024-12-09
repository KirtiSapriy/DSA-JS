let arr = [1, 2, 4, 4, 4, 4, 4, 10], target = 4;

let ans = -1, l = 0; r = arr.length - 1;
let FandlIndex = [];

while (l <= r) {

        if (arr[l] == target) {
                FandlIndex.push(l)
        }

        if (arr[r] == target) {
                FandlIndex.push(r)
        }

        l++;
        r--;

}
FandlIndex.sort().splice(1, FandlIndex.length - 2)
console.log(FandlIndex);

