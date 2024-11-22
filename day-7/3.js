let arr = [1, 2, 2, 3, 4, 2]

let target = 2;


console.log(count(arr, target))

function count(arr, target) {
        let count = 0;
        for (let a = 0; a < arr.length; a++) {

                if (arr[a] == target) {
                        count++;
                }

        }

        return count
}