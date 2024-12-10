// Q11 :- Write a function findIntersection(arr1, arr2) that returns the intersection of two arrays using a Set.

let a = [1, 2, 3, 4], b = [3, 4, 5, 6]


function findIntersection(arr1, arr2) {
        let set = new Set(arr1)
        let intersection = []
        for (let el of arr2) {
                if (set.has(el)) {
                        intersection.push(el)
                }
                set.add(el)
        }

        return intersection;
}

console.log(findIntersection(a, b));
