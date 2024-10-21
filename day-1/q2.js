
// Find the maximum Element  from the Array;

// let arr = [1,9,3,8,5,6];
//  output = 9; 

let a = [1, 2, 3, 4, 5, 6]

let max = 0;

for (let n = 0; n < a.length; n++) {

        if (max < a[n]) {
                max = a[n]
        }
} 

console.log(max);


