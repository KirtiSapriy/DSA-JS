function sum(n) {

        if (n == 0) {
                return 0;

        }

        return Math.floor(n % 10) + sum(n /= 10)

}

console.log(sum(123));
