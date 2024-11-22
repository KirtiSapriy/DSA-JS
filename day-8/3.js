let nums = [1, 1, 2, 3, 3, 4];

let i = 0
for (let a = 0; a < nums.length; a++) {
        if (nums[a] != nums[i]) {

                i++;
                nums[i] = nums[a]

        }
}



console.log(i + 1);
