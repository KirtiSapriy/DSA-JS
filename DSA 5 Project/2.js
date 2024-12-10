// Q2: Count Even Numbers

let arr = [2, 3, 4, 7, 8]

function CountEven(arr) {

        let EvenCount = 0;

        for (let a = 0; a < arr.length; a++) {
                if (arr[a] % 2 == 0) {
                        EvenCount++
                }
        }


        return EvenCount;
}

console.log(CountEven(arr));
