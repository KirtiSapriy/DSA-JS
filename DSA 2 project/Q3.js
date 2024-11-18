let arr = [1, 2, 3, 4, 5];
let fleg = true;

for (let a = 0; a < arr.length - 1; a++) {

        for (let b = 0; b < arr.length - 1; b++) {

                if (arr[b] > arr[b + 1]) {
                        let tem = arr[b];
                        arr[b] = arr[b + 1]
                        arr[b + 1] = tem;

                        fleg = false
                }

        }
        if (fleg) {
                break;
        }
}
console.log(fleg);

