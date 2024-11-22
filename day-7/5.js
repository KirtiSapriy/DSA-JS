let arr = [4, 7, 1, 5,9], target = 5;


console.log(Find(arr,target));


function Find(arr, target) {

        for (let a = 0; a < arr.length; a++) {
                if (arr[a] == target) {
                        return true;
                }
        }

        return false;

}