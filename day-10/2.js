


function fect(n) {

        if (n == 1) {
                return n;
        }

        return n * fect(n - 1)
}

console.log(fect(5));
