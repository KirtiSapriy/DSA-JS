// [1, 2, 3], [3, 4, 5]


function findeUnion(arr1, arr2) {

        let set = new Set(arr1)
        let a = []
        for (val of arr2) {
                set.add(val)
        }
        for (val of set) {
                a.push(val)
        }
        return a

}

console.log(findeUnion([1, 2, 3], [3, 4, 5]));
