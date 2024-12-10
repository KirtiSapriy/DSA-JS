//  Q5: Search Element
let arr = [1, 2, 3, 4, 5, 6], target = 4;

function SearchElement(arr, target) {

        let l = 0, r = arr.length - 1;

        while (l <= r) {

                if (arr[l] == target) {
                        return true
                }

                if (arr[r] == target) {
                        return true
                }
                l++
                r--
        }


        return false;



}


console.log(SearchElement(arr, target));
