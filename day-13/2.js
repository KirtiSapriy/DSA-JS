let arr = [1, 2, 2, 3, 3, 3]

const Maps = new Map()

for (let val of arr) {

        if (Maps.has(val)) {

                Maps.set(val, (Maps.get(val) + 1))

        }
        else {
                Maps.set(val, 1)
        }

}

console.log(Maps);
