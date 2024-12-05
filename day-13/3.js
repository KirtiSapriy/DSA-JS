// [1, 2, 3], [3, 4, 5]


function findeUnion(arr1, arr2) {

        let set = new Set()

        for (val of arr1) {
                set.add(val)
        }
        for (val of arr2) {
                set.add(val)
        }
        return set

}

console.log(findeUnion([1, 2, 3], [3, 4, 5]));
